import { observable, action, computed, ObservableMap } from 'mobx'
import { Task, ITask, TaskStatus } from './Task'
import { string } from 'prop-types';
export class TodoStore {

    /*i: ITask;
    initialTask: Task;
    constructor() {
        this.i = {
            title: ""
        }

        this.initialTask = new Task(this.i)

    }*/

    @observable private tasks: ObservableMap<string, Task> = observable.map();
    @observable activeTask: Task | undefined;
    @observable inProgressTask: Task | undefined;
    //@observable aa: any = null;

    @computed get getTasks(): Task[] {
        const tab: Task[] = []
        this.tasks.forEach(
            (t: Task) => {
                tab.push(t)
            }
        )
        return tab;
    }

    @action addTask(task: Task) {
        console.log(task);
        this.tasks.set(task.id, task);
    }

    @action setActiveTask(task: Task | undefined) {
        this.activeTask = task;
    }

    @action
    removeTask = (deletedTaskId: string) => {
        if (this.activeTask && deletedTaskId !== this.activeTask.id) {
            this.tasks.delete(deletedTaskId);
        }

    }

    @action
    updateTask = (updatedTaskId: string) => {
        console.log('update');
    }

    clickTask = (id: string): void => {
        this.setActiveTask(this.tasks.get(id));

    }

    @action
    doneTask = (id: string): void => {
        this.tasks.forEach(
            (t: Task) => {
                if (t.id === id) {
                    t.setStatus();
                    console.log(t.status);
                }
            }
        )
    }

    @action
    startProgress = () => {
        this.inProgressTask = this.activeTask;
    }


}

export const taskStore = new TodoStore();

