var WORD_LENGHT = 4
var prompt = require('prompt')

var min = 1000
var max = 10000

prompt.start();

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var theNum = getRandomInt(min, max)

function promptNumber() {
    prompt.get([{
        name: 'guess',
        require: true
    }],function (err, result) {
        if (result.guess != theNum)
        {
            var bnc = findBullsAndCows(theNum, result.guess) //bnc means bulls and cows

            console.log("the Num is: " + theNum)
            promptNumber()
        }
        else
        {
            return console.log("You find the Num!")
        };
    })
}

function findBullsAndCows (theNum, guess)
{
    var guess = guess.toString()
    var bnc = {bulls: 0, cows: 0}
    var theNum = theNum.toString()

    for (var i=0; i < WORD_LENGHT; i++)
    {
        var hasDigit = guess.search(theNum[i]) != -1
        if (hasDigit){
            if (guess[i] == theNum[i])
            {
                bnc.bulls++
            }
            else
            {
                bnc.cows++
            }
        }
    }
    console.log(bnc.bulls + " Bulls " + bnc.cows + " Cows")
    return bnc
}


promptNumber();
