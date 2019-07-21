class InputViewModel {
    constructor(taskStore: any){
        this.store = taskStore;
    }
    store: any;

    getTasks(){
        return this.store.getTasks();
    }

    addTask(task: any) {
        this.store.addTask(task)
    }

    removeTask(task: any) {
        this.store.removeTask(task);
    }
}

export default InputViewModel;