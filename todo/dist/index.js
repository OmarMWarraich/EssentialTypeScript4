"use strict";
//Testing the Data Model in the index.ts File in the src Folder
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = require("./todoItem");
const todoCollection_1 = require("./todoCollection");
let todos = [
    new todoItem_1.TodoItem(1, "Buy Flowers"), new todoItem_1.TodoItem(2, "Get Shoes"),
    new todoItem_1.TodoItem(3, "Collect Tickets"), new todoItem_1.TodoItem(4, "Call Joe", true)
];
let collection = new todoCollection_1.TodoCollection("Adam", todos);
console.clear();
console.log(`${collection.userName}'s Todo List `
    + `(${collection.getItemCounts().incomplete} items to do)`);
// let newId: number = collection.addTodo("Go for run");
// let todoItem: TodoItem = collection.getTodoById(newId);
// // console.log(JSON.stringify(todoItem));
// todoItem.printDetails();
//collection.addTodo(todoItem);
//Getting the Collection Items.
//Testing Item removal 
// collection.removeComplete();
collection.getTodoItems(true).forEach(item => item.printDetails());
