    'use strict';

var toDo = (function() {

    var tasks = [];
    var index = 1;

    function addTask (taskName) {
       var task = {
            id: index,
            name: taskName,
            finished: false
       };

       tasks.push(task);

       index++;

       toDo.displayList();
    };

    function displayList() {
        var ul = $("ul#first-list");

        ul.empty();

        for (var i = 0; i < tasks.length; i++){
            if (tasks[i]['finished'] === true) {
                var checkB = $("<input type='checkbox' checked='checked' disabled='disabled'>");
            }
            else {
                var checkB = $("<input type='checkbox'>");
            }

            checkB.attr('id', 'check-box-' + tasks[i]['id']);
            checkB.click(finishTask);

            var li = $("<li></li>").append(checkB);



            li.attr('id', 'li-' + tasks[i]['id']);
            li.append(tasks[i]['name']);
            if (tasks[i]['finished'] === true){
                var delButton = $("<button>Delete this task!</button>");

                delButton.attr('id', 'delete-button-' + tasks[i]['id']);
                delButton.click(delTask);
                li.append(delButton);
            }
            ul.append(li);
        };
    };

    function delTask (event) {
        var thisId = $(this).attr('id');

        thisId = thisId.split('-')[2];

        for (var i = 0; i < tasks.length; i++) {
            if (tasks[i]['id'] == thisId){
                thisId = i;
                break;
            }
        }

        tasks.splice(thisId, 1);

        toDo.displayList();
    }

    function finishTask (event) {
        var thisId = $(this).attr('id');

        thisId = thisId.split('-')[2];

        for (var i = 0; i < tasks.length; i++) {
            if (tasks[i]['id'] == thisId){
                tasks[i]['finished'] = true;
            }
        }

        toDo.displayList();
    };

    return {
        addTask: addTask,
        finishTask: finishTask,
        displayList: displayList
        };
})();


$(document).ready(function() {
    var newTask = $("input#new-task");
    $("button#add-task-button").click(function (){
        var newTask = $("input#new-task");
        toDo.addTask(newTask.val());
    })
})


// dobavi buton koito trie task-ove
