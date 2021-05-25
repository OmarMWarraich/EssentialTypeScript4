//Creating the Todo Item Collection class
import { TodoItem } from './todoItem';

//Using a Shape Type
//type keyword used to create a type alias, 2 assign a name 2 shape type conveniently,
//here type alias describes objects javing 2 numer properties, named total & incomplete.
type ItemCounts = {
    total: number,
    incomplete: number
}

export class TodoCollection {
    private nextId: number = 1;
//Adding Features to the collection class
//Using a Map
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

    // Providing access to Todo items
    getTodoItems(includeComplete: boolean): TodoItem[] {
        return [...this.itemMap.values()]
            .filter(item => includeComplete || !item.complete);
    }

    markComplete(id: number, complete: boolean) {
        const todoItem = this.getTodoById(id);
        if (todoItem) {
            todoItem.complete = complete;
        }
    }

    removeComplete() {
        this.itemMap.forEach(item => {
            if (item.complete) {
                this.itemMap.delete(item.id)
            }
        })
    }

    getItemCounts(): ItemCounts {
        return {
            total: this.itemMap.size,
            incomplete: this.getTodoItems(false).length
        }
    }
}