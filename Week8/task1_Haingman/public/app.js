var lifes = 8;
var words = ['apple', 'green', 'blue', 'yellow', 'bird', 'house', 'airplane', 'building',
             'banana'];
var word = words[Math.floor(Math.random()*words.length)];
var tryed = [];


function showLifes() {
    var h1 = $("h1").text(lifes + " Lifes");
}

function printCh() {
    var h2 = $("h2");
    for(var i = 0; i < word.length; i++) {
        if (i == 0 || i == word.length - 1) {
            h2.append(word[i]);
        }
        else {
            h2.append('_');
        }
    }
}

function valInArr (val, arr) {
    for (var i = 0; i < arr.length; i++){
        if (arr[i] == val){
            return true;
        }
    }
    return false;
}

function check() {
    var input = $('input').val();
    var wordPos = [];
    var h2 = $("h2");

    if (word == input){
        $("h1").text("YOU WIN!");
        h2.text("The word is: " + word);
        var a = $("a#start-new-game");
        a.attr('href', '/');
        a.append("Start new game!")
        $('button').remove();
        $('input').remove()
    }
    else{
        for (var i = 0; i < word.length; i++){
            if (word[i] == input){
                wordPos.push(i);
            }
        }
        if(wordPos.length == 0){
            if (--lifes == 0){
                $("h1").text("YOU LOSE");
                h2.text("The word is: " + word);
                var a = $("a#start-new-game");
                a.attr('href', '/');
                a.append("Start new game!")
                $('button').remove();
                $('input').remove()
            }
            else{
               showLifes();
            }
            if (!(valInArr(input, tryed)) && tryed == ""){
                var li = $('<li></li>').append(" " + input);
                $('ul').append(li);
                tryed.push(input);
            }
            else if(!(valInArr(input, tryed)) && tryed != ''){
                var li = $('<li></li>').append(', ');
                li.append(input)
                $('ul').append(li);
                tryed.push("' ");
                tryed.push(input);
            }
        }
        else{
            var h2Val = h2.text();
            var h2New = ''

            for (var i = 0; i < h2Val.length; i++){
                if (h2Val[i] == '_' && valInArr(i, wordPos)){
                    h2New += input;
                }
                else{
                    h2New += h2Val[i];
                }
            }

            if(valInArr('_', h2New)){
                h2.text(h2New);
            }
            else{
                $("h1").text("YOU WIN!");
                h2.text("The word is: " + word);
                var a = $("a#start-new-game");
                a.attr('href', '/');
                a.append("Start new game!")
                $('button').remove();
                $('input').remove()
            }
        }
    }
    input = $('input');
    input.val('');
}

$(document).ready(function() {
    showLifes();
    printCh();
    var btn = $("button");
    btn.click(check);
})
