'use strict';

var id = 1;

function finishTask(event){
    var thisId = $(this).attr('id');

    thisId = thisId.split('-')[2];

    var thisText = $("li#li-" + thisId);

    alert(thisText.text());

}

function addTask (event) {
    var inputNewTask = $("input#new-task");

    var checkB = $("<input type='checkbox'>");
    checkB.attr('id', 'check-box-' + id)
    checkB.click(finishTask);

    var li = $("<li></li>").append(checkB);
    li.attr('id', 'li-' + id);
    li.append(inputNewTask.val());

    id++;

    inputNewTask.val('')


    $("ul.first-list").append(li);
};





$(document).ready(function() {
    $("button#add-task-button").click(addTask)
})
