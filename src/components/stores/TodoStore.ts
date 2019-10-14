import { observable, action, computed, ObservableMap } from 'mobx'
import { Task } from '../Task/Task.Model'
export class TodoStore {

    @observable private tasks: ObservableMap<string, Task> = observable.map();
    @observable activeTask: Task | undefined;
    @observable inProgressTask: Task | undefined;

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
        if (this.tasks.size === 1) {
            this.activeTask = task;
        }
    }

    @action
    setActiveTask(task: Task | undefined) {
        this.activeTask = task;
    }

    @action
    removeTask = (deletedTaskId: string) => {
        console.log(this.activeTask);
        console.log('delete');
        this.tasks.delete(deletedTaskId);
    }

    /*@todo implement @action
    updateTask = (updatedTaskId: string) => {
        console.log('update');
    }*/

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

export default new TodoStore();

