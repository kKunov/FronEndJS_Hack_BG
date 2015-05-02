"use strict"

var express = require('express')
var app = express()
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var fs = require('fs');

app.use(express.static('public'));
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride());


var id = 1;

var students = [
    {id: 1, name: "Gosho", email: "gosho@mail.com", classes: ['js', '101']},
    {id: 2, name: "Kiro", email: "kiro@mail.com", classes: ['js', 'java']},
    {id: 3, name: "Misho", email: "misho@mail.com", classes: ['java', '101']}

];

// routes
app.get('/', function (req, res) {
  res.render('index');
})

app.get("/api/students", function(req, res){
    res.jsonp(students);
});

app.get("/api/students/:id", function(req, res){
    var id = req.params.id;
    for(var i = 0; i < students.length; i++){
        if(students[i]['id'] == id){
            res.jsonp(students[i]);
        }
    }
});

app.post("/api/students", function(req, res){
    var id = req.body.id;
    var name = req.body.name;
    var email = req.body.email;
    var classes = req.body.classes;

    // to-do: handle string value in classes
    var student = {id: id, name: name, email: email, classes: classes};
    students.push(student)

    res.jsonp({
        msg: 'student created',
        data: student
    })
});

app.put('/api/students/:id', function(req, res){
    var id = req.params.id;

    students.forEach(function(student, i){
        if(student['id'] == id){
            student['id'] = req.body.id || student['id'];
            student['name'] = req.body.name || student['name'];
            student['email'] = req.body.email || student['email'];
            student['classes'] = req.body.classes || student['classes'];

        res.jsonp({
            msg: 'student updated',
            data: student
    })
        }
    });
});

app.delete('/api/students/:id', function(req, res){
    var id = req.params.id;
    var index = -1;

    students.forEach(function(student, i){
        if(student['id'] == id){
            index = i;
            return;
        }
    });
    if(index == -1){
        res.jsonp("Student " + id + " does not exist!")
    }
    else{
        students.splice(index, 1)
        res.jsonp("Student " + id + " successfully deleted!")
    }
});

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
