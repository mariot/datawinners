from datawinners.custom_reports.crs.models import PhysicalInventorySheet, WayBillSent, WayBillReceived, crs_model_creator, way_bill_sent_mapping, way_bill_received_mapping
from datawinners.local_settings import WAYBILL_SENT_QUESTIONNAIRE_CODE, WAYBILL_RECEIVED_QUESTIONNAIRE_CODE,\
    PHYSICAL_INVENTORY_QUESTIONNAIRE_CODE

model_routing_dict = {
    WAYBILL_SENT_QUESTIONNAIRE_CODE: {'model': WayBillSent, 'question_mapping': way_bill_sent_mapping},
    WAYBILL_RECEIVED_QUESTIONNAIRE_CODE: {'model': WayBillReceived, 'question_mapping': way_bill_received_mapping},
    PHYSICAL_INVENTORY_QUESTIONNAIRE_CODE: PhysicalInventorySheet,
}

class CRSCustomReportHandler(object):
    def __init__(self, routing_dict=None):
        self.routing_dict = routing_dict or model_routing_dict


    def handle(self, form_code, submission_data):
        dictionary = self.routing_dict.get(form_code)
        if dictionary :
            crs_model_creator(submission_data, dictionary.get('model'),dictionary.get('question_mapping'))
