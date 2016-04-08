import abc

from mangrove.form_model.xform import add_attrib, remove_attrib

from datawinners.blue.rules.rule import Rule


class NodeAttributeRule(Rule):
    __metaclass__ = abc.ABCMeta

    def add(self, parent_node, node, bind_node, instance_node, xform):
        pass

    def remove(self, parent_node, node, xform):
        pass

    def update_submission(self, submission):
        return False

    def edit(self, node, old_field, new_field, xform):
        if bool(new_field.appearance) and node.get(self.attribute_name()) != new_field.appearance:
            add_attrib(node, self.attribute_name(), new_field.appearance)

        if not bool(new_field.appearance) and bool(node.get(self.attribute_name())):
            remove_attrib(node, self.attribute_name())

    @abc.abstractmethod
    def attribute_name(self):
        pass


class EditAppearanceRule(NodeAttributeRule):
    def attribute_name(self):
        return 'appearance'