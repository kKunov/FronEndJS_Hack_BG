function addStudent(){
    var inpId = $("input#id").val();
    var inpName = $("input#name").val();
    var inpEmail = $("input#email").val();
    var inpClasses = $("input#classes").val();

    $.ajax({
        url: '/api/students',
        dataType: 'json',
        method: 'post',
        data: {
            id: inpId,
            name: inpName,
            email: inpEmail,
            classes: inpClasses,
        }
    }).done(function(data){
        list();
    })
};


function list(){
    $.ajax({
        url: '/api/students',
        dataType: 'json',
        method: 'get',
    }).done(function(data){
        var tbody = $("tbody#list");
        tbody.empty();
        data.forEach(function(element, index){
            var id = element['id'];
            var name = element['name'];
            var email = element['email'];
            var classes = element['classes'];

            var tr = $("<tr></tr>");

            tr.append($("<td></td>").html(id));
            tr.append($("<td></td>").html(name));
            tr.append($("<td></td>").html(email));
            tr.append($("<td></td>").html(classes));

            tbody.append(tr);
        })
    })
}

$(document).ready(function() {
    list();
    var btn = $("button#button")
    btn.click(addStudent);
});
