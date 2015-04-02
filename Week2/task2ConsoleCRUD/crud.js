var prompt = require('prompt');
var chalk = require('chalk');
var jf = require('jsonfile');
var util = require('util');

var db = [];
var file = 'tmp/db.json'

prompt.start();


function addingPrompt (err, result)
{
    db.push({id: result.id,
             name: result.name,
             email: result.email})
    commandPrompt()
}

function addPrompt ()
{
    prompt.get(['id',
                'name',
                'email',
    ],addingPrompt);
}

function list()
{
    biggest = [0, 0, 0]

    console.log('| ' + "ID" + ' | ' + "Name" + ' | ' + "Email" + ' |')

    for(var i=0; i < db.length; i++)
    {
        console.log('---------------------------------------------------------------')
        console.log('| ' + chalk.styles.red.open + db[i].id + chalk.styles.red.close + ' | ' + chalk.styles.blue.open + db[i].name + chalk.styles.blue.close + ' | ' + chalk.styles.yellow.open + db[i].email + chalk.styles.yellow.close +' |')
    }

    console.log('---------------------------------------------------------------')
    commandPrompt();
}

function getPrompt()
{
    prompt.get(['key',
                 'value'
    ],function(err, result)
    {
        for(var i = 0; i < db.length; i++)
        {
            if(db[i][result.key] == result.value)
            {
                console.log('| ' + chalk.styles.red.open + db[i].id + chalk.styles.red.close + ' | ' + chalk.styles.blue.open + db[i].name + chalk.styles.blue.close + ' | ' + chalk.styles.yellow.open + db[i].email + chalk.styles.yellow.close +' |')
                break;
            }
        }
        commandPrompt();
    })
}

function save()
{
    jf.writeFileSync(file, db)
    commandPrompt()
}

function load()
{
    db = jf.readFileSync(file);
    commandPrompt();
}

function removePrompt()
{
    prompt.get(['key',
                 'value'
    ],function(err, result)
    {
        for(var i = 0; i < db.length; i++)
        {
            if(db[i][result.key] == result.value)
            {
                db.splice(i, i+1)
                break;
            }
        }
        commandPrompt();
    })
}

function searchPrompt()
{
    prompt.get(['searching'],
    function(err, result)
    {
        console.log('| ' + "ID" + ' | ' + "Name" + ' | ' + "Email" + ' |')

        for(var i = 0; i < db.length; i++)
        {
            if([i]['name'].match(result.searchingdb, g) || db[i]['email'].match(result.searchingdb, g))
            {
                console.log('---------------------------------------------------------------')
                console.log('| ' + chalk.styles.red.open + db[i].id + chalk.styles.red.close + ' | ' + chalk.styles.blue.open + db[i].name + chalk.styles.blue.close + ' | ' + chalk.styles.yellow.open + db[i].email + chalk.styles.yellow.close +' |')
            }
        }

        console.log('---------------------------------------------------------------')
    })
}

function readingCommand (err, result) {
    switch(result.command)
    {
        case 'add':
            addPrompt();
            break;
        case 'list':
            list();
            break;
        case 'quit':
            return;
        case 'get':
            getPrompt();
            break;
        case 'save':
            save();
            break;
        case 'load':
            load();
            break;
        case 'remove':
            removePrompt();
            break;
        case 'search':
            searchPrompt();
            break;
        default:
            console.log('Wrong command! Try again!')
            commandPrompt();
    }
}

function commandPrompt () {
    prompt.get([{
        name: 'command',
        require: true,
    }],readingCommand)
}

commandPrompt();
