import { observable, action, computed } from 'mobx'
import { Task, ITask, TaskStatus } from './Task'
export class TodoStore {

    /*i: ITask;
    initialTask: Task;
    constructor() {
        this.i = {
            title: ""
        }

        this.initialTask = new Task(this.i)

    }*/

    @observable tasks: Task[] = [];
    @observable activeTask: Task = new Task({ title: '' });
    @observable aa: any = null;


    @action addTask(task: Task) {
        console.log(task);
        this.tasks.push(task);
    }

    @action setActiveTask(task: Task) {
        this.activeTask = task;
    }

    @action
    removeTask = (deletedTaskId: string) => {
        if (!deletedTaskId) return this.tasks;
        const updatedTasks = this.tasks.filter(function (task) {
            return deletedTaskId !== task.id;
        })
        this.tasks = updatedTasks;
    }

    @action
    updateTask = (updatedTaskId: string) => {
        console.log('update');
    }

    clickTask = (id: string): void => {
        const t = this.tasks.filter(function (task) {
            return id === task.id;
        })
        this.setActiveTask(t[0]);
        console.log(t[0]);
    }

    @action
    doneTask = (id: string): void => {
        const t = this.tasks.filter(function (task) {
            return id === task.id;
        })
        t[0].status === TaskStatus.todo ?
            t[0].status = TaskStatus.done : t[0].status = TaskStatus.todo;
    }


}

export const taskStore = new TodoStore();

