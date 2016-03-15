from datawinners.blue.rules.add_rule import AddRule
from datawinners.blue.rules.bind_rule import EditConstraintMessageRule
from datawinners.blue.rules.node_rule import EditLabelRule, EditHintRule
from datawinners.blue.rules.remove_rule import RemoveRule


def get_all_rules():
    return [EditLabelRule(), EditHintRule(), EditConstraintMessageRule(), RemoveRule(), AddRule()]