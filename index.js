const newHTML = require('./src/newHTML');
const fs = require('fs');
const inquire = require('inquirer');

const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

// team array for manager, interns and engineers

const teamArr = [];

// prompt to generate manager for team

const newManager = () => {
    return inquire.prompt([

        {
            type: 'input',
            name: 'name',
            message: 'Name of the manager:',
            validate: answer => {
                if (answer) {
                    return true;
                } else {
                    console.log("Enter the manager's name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Manager's ID:",
            validate: answer => {
                if (isNaN(answer)) {
                    console.log("Enter the manager's ID.")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Manager's email:",
            validate: answer => {
                if (answer) {
                    return true;
                } else {
                    console.log("Enter the manager's email.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: "Manager's office number:",
            validate: answer => {
                if (isNaN(answer)) {
                    console.log('Enter an office number.');
                    return false;
                } else {
                    return true;
                }
            }
        }
    ]).then(enterManager => {
        const {name, id, email, office} = enterManager;
        const manager = new Manager (name, id, email, office);

        teamArr.push(manager);
        console.log(manager)
    });
}

// prompt to generate employee roles for intern and engineer

const newEmployee = () => {
    return inquire.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Choose your employee's role",
            choices: ["Engineer", "Intern"]
        },
        {
            type: 'input',
            name: 'name',
            message: "Enter the name of your employee?",
            validate: answer => {
                if (answer) {
                    return true;
                } else {
                    console.log("Enter the employee's name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the employee's ID.",
            validate: answer => {
                if (isNaN(answer)) {
                    console.log("Enter the employee's ID.")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the employee's email:",
            validate: email => {
                valid = /^\w+([\.-]?w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Enter a valid email.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter the employee's Github username:",
            when: (input) => input.role === "Engineer",
            validate: answer => {
                if (answer) {
                    return true;
                } else {
                    console.log("Please enter the employee's Github username!");
                };
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter the Intern's school name:",
            when: (input) => input.role === "Intern",
            validate: answer => {
                if (answer) {
                    return true;
                } else {
                    console.log("Enter the Intern's school")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmNewEmployee',
            message: 'Add another team member?',
            default: false
        }
    ]).then(employeeInfo => {
        let {name, id, role, github, school, confirmNewEmployee} = employeeInfo;
        let employee;

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);
            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
            console.log(employee)
        }

        teamArr.push(employee);

        if (confirmNewEmployee) {
            return newEmployee(teamArr);

        } else {
            return teamArr;
        }
    })
};

// generate new html file to render team cards

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, error => {
        if (error) {
            console.log(error);
            return;
        } else {
            console.log('You created your new team!')
        }
    })
};

newManager()
.then(newEmployee)
.then(teamArr => {
    return newHTML(teamArr);

}).then(newPageHTML => {
    return writeFile(newPageHTML);

}).catch(error => {
    console.log(error)
});