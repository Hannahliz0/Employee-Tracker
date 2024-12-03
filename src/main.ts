//ToDo import classes from other files
import inquirer from "inquirer";
import Department from "./Department.js";
import Employee from "./Employee.js"
import Role from "./Role.js"

// todo define the Cli class
class Cli {
    mainOptions: (Department | Employee | Role)[];
    exit: boolean = false;

    constructor(mainOptions: (Department | Employee | Role)[]) {
        this.mainOptions = mainOptions;
    }
}
// todo method to choose option from existing
chooseOption(): void {
    inquirer
        .prompt({
            {
                type: 'list',
                name: 'CreateOrEdit',
                message: 'What would you like to do?',
                choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add an employee', 'Update an employee role'],
            }
        });

// todo method to view all departments


    
// todo method to create a new department
// todo method to create a new employee
// todo method to update an employee role
    }









    // inquirer
    //     .prompt({
    //         {
    //             type: 'list',
    //             name: 'CreateOrEdit',
    //             message: 'What would you like to do?',
    //             choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add an employee', 'Update an employee role'],
    //         }
    //     });
    // }

