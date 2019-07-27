import { observable, action } from 'mobx'
import { Task, ITask } from './Task'
export class TodoStore {
    @observable tasks: Task[] = [];

    @action addTask(task: Task) {
        console.log(task);
        this.tasks.push(task);
    }

    @action
    removeTask = (deletedTaskId: string) => {
        if (!deletedTaskId) return this.tasks;
        const updatedTasks = this.tasks.filter(function (task) {
            return deletedTaskId !== task.id;
        })
        this.tasks = updatedTasks;
    }

}

export const taskStore = new TodoStore();

