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
        var driverName1 = $("<h2></h2>").append(team.driver1);
        var driverName2 = $("<h2></h2>").append(team.driver2);

        img.attr('src', team.pic);
        p.attr('class', 'text-center');
        p.text(team.name);
        tdTeam.append(img);
        tdTeam.append(p);
        tr.append(tdTeam);
        tdDrivers.append(driverName1);
        tdDrivers.append(driversName2);


    });
}

$(document).ready(function () {
    loadJson();
})
