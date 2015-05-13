var jf = require('jsonfile')

var db = []
var file = 'tmp/teams.json'

function loadJson () {
    db = jf.readFileSinc(file);
}
function show() {
    db.forEach(function(team, index){
        var tbody = $('tbody');
        var tr = $("<tr></tr>");
        var tdTeam = $("<td></td>");
        var tdDrivers = $("<td></td>");
        var img = $("<img></img>");
        var p = $("<p></p>");
        var driverName1 = $("<h2></h2>").append(team["driver1"]);
        var driverName2 = $("<h2></h2>").append(team["driver2"]);
        var engine = $("<td></td>").append(team["engine"]);

        img.attr('src', team["pic"]);
        p.attr('class', 'text-center');
        p.append(team["name"]);

        tdTeam.append(img);
        tdTeam.append(p);

        tdDrivers.append(driverName1);
        tdDrivers.append(driversName2);
        tr.append(tdTeam);
        tr.append(tdDrivers);
        tr.append(engine);
        tbody.append(tr);
    });
}

$(document).ready(function () {
    loadJson();
    show();
})
