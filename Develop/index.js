// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');



inquirer.prompt(
    [
        {
            type: 'input',
            message: 'What is the project title?',
            name: 'title',
            // makes sure user provided a value
            validate: (value) => {if(value){return true} else{return 'Input required to continue'}}

        },
        {
            type: 'input',
            message: 'What is the description of the app?',
            name: 'description',
            validate:  (value) => {if(value){return true} else{return 'Input required to continue'}}
        },
        {
            type: 'input',
            message: 'How do you install this app?',
            name: 'install',
            validate:  (value) => {if(value){return true} else{return 'Input required to continue'}}
        },
        {
            type: 'input',
            message: 'How do you use this app?',
            name: 'usage',
            validate:  (value) => {if(value){return true} else{return 'Input required to continue'}}

        },
        {
            type:'input',
            message: 'Did you have any credits?',
            name: 'credits',
            validate:  (value) => {if(value){return true} else{return 'Input required to continue'}}
        },
        {
            type:'list',
            message: 'What license(s) did you use?',
            name: 'license',
            choices: ('The MIT license', 'The GPL license', 'Apache license', 'GMU license', 'N/A'),
            validate:  (value) => {if(value){return true} else{return 'Input required to continue'}}
        },
        {
            type:'input',
            message: 'GitHub username:',
            name: 'git',
            validate:  (value) => {if(value){return true} else{return 'Input required to continue'}}
        },
        {
            type:'input',
            message: 'Did you have any collaborators?',
            name: 'credits',
            validate:  (value) => {if(value){return true} else{return 'Input required to continue'}}
        },
    ]
).then((
    title,
    description,
    install,
    usage,
    credits,
    license,
    git
    ) => )   