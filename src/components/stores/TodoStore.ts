import { observable, action, computed, ObservableMap } from 'mobx'
import { Task } from '../Task/Task.Model'
import { Mocks } from './TodoStore.Mock';
export class TodoStore {

    @observable private tasks: ObservableMap<string, Task> = observable.map();
    @observable activeTask: Task | undefined;
    @observable inProgressTask: Task | undefined;

    /**
     *
     */
    constructor() {
        this.tasks.set(Mocks.t1.id, Mocks.t1)

    }

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
        this.tasks.delete(deletedTaskId);
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

