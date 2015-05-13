function Resource(url){
    this.url = url;
}

Resource.prototype.query = function(){
    $.ajax({
            url: this.url,
            dataType: 'json',
            method: 'get',
        }).done(function(data){
            console.log(data)
            for(var i = 0; i < data['list'].length; i++){
                console.log(data['list'][i])
            }
        })
}

Resource.prototype.create = function(data){
    $.ajax({
        url: this.url,
        dataType: 'json',
        method: 'post',
        data: data,
    })
}

Resource.prototype.view = function(id){
    $.ajax({
        url: this.url + '/' + id,
        dataType: 'json',
        method: 'get',
    }).done(function(data){
        console.log(data)
    })
}

Resource.prototype.update = function(id, data){
    $.ajax({
        url: this.url + '/' + id,
        dataType: 'json',
        method: 'put',
        data: data,
    })
}

Resource.prototype.delete = function(id){
    $.ajax({
        url: this.url + '/' + id,
        dataType: 'json',
        method: 'delete',
    })
}

$(document).ready(function() {

    var url = 'http://192.168.0.66:3000/api/students';
    var res = new Resource(url);
    var data = {email: "kokal121@mail.com"};
    var id = '554ce921c23b62f14096f055';
    res.delete(id);
    res.query();
})
