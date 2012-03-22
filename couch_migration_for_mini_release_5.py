# vim: ai ts=4 sts=4 et sw=4 encoding=utf-8
from mangrove.form_model.form_model import get_form_model_by_code
from datawinners.main.initial_couch_fixtures import load_all_managers
from mangrove.contrib.deletion import create_default_delete_form_model, ENTITY_DELETION_FORM_CODE
from mangrove.bootstrap.initializer import sync_views

managers = load_all_managers()

def migrate_01(managers):
    for manager in managers:
        try:
            form_model = get_form_model_by_code(manager, ENTITY_DELETION_FORM_CODE)
            form_model.delete()
        except Exception:
            pass
        finally:
            create_default_delete_form_model(manager)

        sync_views(manager)

migrate_01(managers)

