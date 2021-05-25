//Testing the Data Model in the index.ts File in the src Folder

import { TodoItem } from './todoItem';
import { TodoCollection } from './todoCollection';
import * as inquirer from 'inquirer';

let todos: TodoItem[] = [
    new TodoItem(1, "Buy Flowers"), new TodoItem(2, "Get Shoes"),
    new TodoItem(3, "Collect Tickets"), new TodoItem(4, "Call Joe", true)
];

let collection: TodoCollection = new TodoCollection("Adam", todos);
let showCompleted = true;

// console.clear();

function displayTodoList(): void {
    console.log(`${collection.userName}'s Todo List `
    + `(${ collection.getItemCounts().incomplete } items to do)`);
    // let newId: number = collection.addTodo("Go for run");
    // let todoItem: TodoItem = collection.getTodoById(newId);
    // // console.log(JSON.stringify(todoItem));
    // todoItem.printDetails();

    //collection.addTodo(todoItem);
    //Getting the Collection Items.
    //Testing Item removal 
    // collection.removeComplete();
    collection.getTodoItems(showCompleted).forEach(item => item.printDetails());
}

enum Commands {
    Add = "Add New Task",
    Toggle = "Show/Hide Completed",
    Quit = "Quit"
}

function promptAdd(): void {
    console.clear();
    inquirer.prompt({ type: "input", name:"add", message: "Enter task:"})
        .then(answers => {if (answers["add"] !== ""){
            collection.addTodo(answers["add"]);
        }
    promptUser();
    })
}

function promptUser(): void {
    console.clear();
    displayTodoList();
    inquirer.prompt({
            type: "list",
            name: "command",
            message: "Choose option",
            choices: Object.values(Commands),
            //badProperty: true
    }).then(answers => {
        switch (answers["command"]) {
            case Commands.Toggle:
                showCompleted = !showCompleted;
            promptUser();
                break;
            case Commands.Add:
                promptAdd();
                break;
        }
    })
}

promptUser();
