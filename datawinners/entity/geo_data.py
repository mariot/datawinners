import json

from mangrove.datastore.entity import get_all_entities
from mangrove.errors.MangroveException import DataObjectNotFound


def geo_json(dbm, entity_type, filters=None, details=[]):
    location_list = []

    try:
        entity_all_fields = dbm.view.registration_form_model_by_entity_type(key=[entity_type], include_docs=True)[0]["doc"]["json_fields"]
        first_geocode_field = _get_first_geocode_field_for_entity_type(entity_all_fields)
        details.extend(['q2', 'q6'])
        fields_to_show = filter(lambda field: field['code'] in details, entity_all_fields)
        if first_geocode_field:
            unique_ids = get_all_entities(
                dbm, [entity_type], 1000, None if filters is None else _transform_filters(filters, entity_all_fields)
            )
            location_list.extend(get_location_list_for_entities(
                _get_field_labels(fields_to_show),
                first_geocode_field,
                unique_ids
            ))

    except DataObjectNotFound:
        pass

    return json.dumps({"type": "FeatureCollection", "features": location_list})


def _transform_filters(filters, entity_all_fields):
    entity_fields_dict = dict((field['code'], field) for field in entity_all_fields)
    return {
        entity_fields_dict[f]['name']: [
            choice['text'] for choice in entity_fields_dict[f]['choices'] if choice['val'] in filters[f]
        ]
        for f in filters
    }


def _get_field_labels(entity_fields):
    dict_simplified = {}
    for field in entity_fields :
        dict_simplified[field['name']] = field['label']
    return dict_simplified


def _get_first_geocode_field_for_entity_type(entity_all_fields):
    geocode_fields = [f for f in
                      entity_all_fields if
                      f["type"] == "geocode"]
    return geocode_fields[0] if len(geocode_fields) > 0 else None


def get_location_list_for_entities(entity_field_labels, first_geocode_field, unique_ids):
    location_list = []
    for entity in unique_ids:
        value_dict = entity.data.get(first_geocode_field["name"])
        if value_dict and value_dict.has_key('value'):
            value = value_dict["value"]
            location_list.append(to_json_point(value, entity_field_labels, entity.data, entity.type_string))
    return location_list


def to_json_point(value, entity_field_labels, data=None, entity_type=None):
    point_json = {"type": "Feature", "geometry":
        {
            "type": "Point",
            "coordinates": [
                value[1],
                value[0]
            ]
        },
        "properties": simplify_field_data(data, entity_field_labels, entity_type)
    }
    return point_json


def simplify_field_data(data, entity_field_labels, entity_type=None):
    simple_data = {}

    if entity_type is not None:
        simple_data['entity_type'] = {}
        simple_data['entity_type']["value"] = entity_type
        simple_data['entity_type']["label"] = ""

    entity_details = [item for item in data.items() if item[0] in entity_field_labels.keys()]

    for key, value_field in entity_details:
        one_field_data = {}
        one_field_data["value"]= value_field["value"]

        if key != "entity_type":
            if key == "mobile_number" and entity_type is None:
                one_field_data["label"]= entity_field_labels["telephone_number"]
            else:
                one_field_data["label"]= entity_field_labels[key]
        else:
            one_field_data["label"] = ""

        simple_data[key] = one_field_data
    return simple_data