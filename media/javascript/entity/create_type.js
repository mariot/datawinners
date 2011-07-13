$(document).ready(function() {
$("#add_subject_type").accordion({collapsible: true,autoHeight:false, active:2});


$("#add_type").live("click", function(){

     var new_type = $("#id_entity_type_text").val();
    $.post("/entity/type/create/", { entity_type_create: new_type},
            function(response) {
                var data=JSON.parse(response)
                if(data.success==true){
                    $("#id_entity_type").prepend("<option value=" + new_type+ ">" +new_type + "</option>");
                    $('#id_entity_type').val(0);
                    $("#add_subject_type").accordion({collapsible: true,autoHeight:false, active:2});
                }
                else{
                    $('#id_entity_type').val(new_type.toLowerCase());
                    $("#add_subject_type").accordion({collapsible: true,autoHeight:false, active:2});
                    $("#type_message").html("<label>" + data.message+ "</label>");
                }
            });
});

});
