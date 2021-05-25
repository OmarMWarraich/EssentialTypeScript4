//Creating the Todo Item Collection class
import { TodoItem } from './todoItem';

export class TodoCollection {
    private nextId: number = 1;
//Adding Features to the collection class
    private itemMap = new Map<number, TodoItem>();
    
    constructor(public userName: string, todoItems: TodoItem[] =[]){
        todoItems.forEach(item => this.itemMap.set(item.id, item));
                }

    addTodo(task: string): number {
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }
        this.itemMap.set(this.nextId, new TodoItem(this.nextId, task));
        return this.nextId;
    }

    getTodoById(id: number): TodoItem {
        return this.itemMap.get(id);
    }

    markComplete(id: number, complete: boolean) {
        const todoItem = this.getTodoById(id);
        if (todoItem) {
            todoItem.complete = complete;
        }
    }
}