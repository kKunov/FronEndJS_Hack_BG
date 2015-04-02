var prompt = require('prompt')
var LIFES = 8;
THE_WORD = 'COMPUTER';


/*prompt.start();

function theGame(guessed)
{
    guessed = pick(guessed, [0, THE_WORD.length]);
    prompt.get([{
            name: 'wordOrLeter',
            require: true
        }],
        if (isItLeter(result.wordOrLeter))
        {
            var whichPoss = isItCountain(result.wordOrLeter, guessed);

            if(whichPoss)
            {
                for(var i=0; i < whichPoss.length; i++)
                {
                    guessed.push(whichPoss[i]);
                    if (guessed.length < THE_WORD.length)
                    {
                        printer(guessed);
                        theGame(guessed);
                    }
                }
            }
        }
        else
        {
            var correct = isTheWordIsCorrect(result.wordOrLeter);
            if (correct)
            {
                console.log("Congrets You find the Word!");
            }
            else
            {
                console.log("Nope, wrong word, -1 life")
                LIFES--;
                if (LIFES == 0)
                {
                    console.log("You are dead now!");
                    return;
                }
                else
                {
                    theGame(guessed);
                }
            }
        })
}

function isItLeter(word)
{
    if(word.length > 1)
    {
        return false;
    }
    else
    {
        return true;
    }
}

function isTheWordIsCorrect(result.word)
{
    var isItCorrect = true;

    if(word.length == THE_WORD.length)
    {
        for(var i = 0; i<THE_WORD.length; i++)
        {
            if (!(word[i] == THE_WORD[i] && isItCorrect))
            {
                return false;
            }
        }
        return true;
    }
    else
    {
        return false;
    }
}

function isItCountain(leter, guessed)
{
    var whichPoss = [];

    for (var i = 1; i < THE_WORD.length-1; i++)
    {
        if(THE_WORD[i] == leter && !(i in guessed))
        {
            whichPoss.push(i);
        }
        if(i in guessed)
        {
            return [];
        }
    }

    return whichPoss;
}*/

var guessed = [0, THE_WORD.length-1]

function printer (guessed)
{
    var guessedLeter=''
    for(var i=0; i<THE_WORD.length; i++)
    {
        if(i in guessed)
        {
            guessedLeter.push(THE_WORD[i])
        }
        else
        {
            guessedLeter.push('_')
        }
    }
}

printer();
