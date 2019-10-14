import taskStore from "../../stores/TodoStore";
import { Task } from '../../Task/Task.Model';
import { BasicFormModel } from './BasicForm.Model';

export default class BasicFormViewModel {

    basicFormModel: BasicFormModel;

    constructor() {
        this.basicFormModel = new BasicFormModel();
        this.handleConfirm = this.handleConfirm.bind(this);
    }

    public handleTitleChange = (title: string) => { console.log(title); this.basicFormModel.setTitle(title); }

    public handleDescriptionChange = (description: string) => this.basicFormModel.setDescription(description)

    public clearTask = () => { this.basicFormModel.clearData() };

    public handleAddTaskCheckbox = () => {
        this.basicFormModel.swithchIsAddCheckboxClicked();
    }

    public handleConfirm() {
        if (this.basicFormModel.title.length !== 0) {
            const task = new Task({ title: this.basicFormModel.title, description: this.basicFormModel.description })
            taskStore.addTask(task);
            this.clearTask();
        }
    }

}



