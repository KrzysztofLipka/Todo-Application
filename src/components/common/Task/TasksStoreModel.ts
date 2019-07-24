import { observable, action } from 'mobx'
import {Task, ITask} from './Task'
export class TodoStore {
    @observable tasks: ITask[] = [];

    @action addTask(task: ITask) {
        this.tasks.push(task);
        console.log([task]);
        console.log(this.tasks);
    }
    
}

export const taskStore = new TodoStore();

