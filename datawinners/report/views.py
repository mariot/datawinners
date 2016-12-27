import json
import logging

from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from django.template import RequestContext, Template
from django.utils.decorators import method_decorator
from django.views.generic import TemplateView

from datawinners.accountmanagement.decorators import session_not_expired, is_not_expired, is_datasender
from datawinners.main.database import get_database_manager
from datawinners.report.aggregator import get_report_data, get_total_count
from datawinners.report.filter import get_report_filters, get_filter_values
from mangrove.datastore.report_config import get_report_configs, get_report_config

logger = logging.getLogger("django")


class AllReportsView(TemplateView):
    template_name = 'report/index.html'

    @method_decorator(login_required)
    @method_decorator(session_not_expired)
    @method_decorator(is_datasender)
    @method_decorator(is_not_expired)
    def get(self, request, *args, **kwargs):
        dbm = get_database_manager(request.user)
        configs = get_report_configs(dbm)
        return self.render_to_response(RequestContext(request, {
            "configs": configs
        }))


def report_content(request, report_id):
    dbm = get_database_manager(request.user)
    config = get_report_config(dbm, report_id)
    content, count, total_count = _build_report_content(dbm, config, request)
    return HttpResponse(
        json.dumps(
            {
                "content": content,
                "totalCount": total_count,
                "count": count,
                "sortColumns": config.sort_fields
            }),
        content_type='application/json')


def report_stylesheet(request, report_id):
    dbm = get_database_manager(request.user)
    config = get_report_config(dbm, report_id)
    style = config.stylesheet().replace("{{report_id}}", report_id)
    return HttpResponse(mimetype="text/css", content=style)


def report_font_file(request, report_id, font_file_name):
    dbm = get_database_manager(request.user)
    config = get_report_config(dbm, report_id)
    font_file = config.font_file(font_file_name)
    return HttpResponse(mimetype="font/opentype", content=font_file)


def _build_report_content(dbm, config, request):
    content = ""
    content += _get_style_content(config)
    data_content, data_count, total_count = _get_content(dbm, config, request)
    content += data_content
    return content, data_count, total_count


def _get_style_content(config):
    return '<link rel="stylesheet" href="/reports/' + config.id + '/stylesheet/" />'


def _get_content(dbm, config, request):
    all_filters = get_report_filters(dbm, config, config.questionnaires[0])
    filter_values = get_filter_values(dbm, config, request.GET)
    data = get_report_data(dbm, config, filter_values[0], filter_values[1])
    return Template(config.template()).render(RequestContext(request, {
        "report_data": data,
        "idnr_filters": all_filters["idnr_filters"],
        "date_filters": all_filters["date_filters"],
        "report_id": "report_" + config.id
    })), len(data), get_total_count(dbm, config, filter_values[0], filter_values[1])
