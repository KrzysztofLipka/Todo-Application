import taskStore from "../../stores/TodoStore";
import { Task } from '../../Task/Task.Model';
import { BasicFormModel } from './BasicForm.Model';
import { StringParser } from '../../utils/StringParser'

export default class BasicFormViewModel {

    basicFormModel: BasicFormModel;

    constructor() {
        this.basicFormModel = new BasicFormModel();
        this.handleConfirm = this.handleConfirm.bind(this);
    }

    public handleTitleChange = (title: string) => { this.basicFormModel.setTitle(title); }

    public handlefastInputValueChange = (value: string) => { this.basicFormModel.setFastInputValue(value) }

    public handleDescriptionChange = (description: string) => this.basicFormModel.setDescription(description)

    public handleDateChange = (date: string) => { this.basicFormModel.setDate(date) }

    public handleSubtaskChange = (subtask: string) => { this.basicFormModel.setSubtask(subtask) }

    public handleConfirmSubtaskInput = () => { this.basicFormModel.addSubtask() }

    public clearTask = () => { this.basicFormModel.clearData() };

    public handleAddTaskCheckbox = () => {
        this.basicFormModel.swithchIsAddCheckboxClicked();
    }

    public handleConfirm() {
        if (this.basicFormModel.fastInputValue.length !== 0) {
            let dueDate = StringParser.getDateFromString(this.basicFormModel.fastInputValue, true);
            let subtaskList = StringParser.getTaskListFromString(this.basicFormModel.fastInputValue);
            const task = new Task({
                title: this.basicFormModel.fastInputValue,
                isCreatedFromForm: true,
                subTasks: subtaskList ? subtaskList : [],
                description: dueDate ? dueDate : undefined

            })
            taskStore.addTask(task);
            this.clearTask();
        }
    }

    handleConfirmForm() {

    }

    handleSubmitForm = () => {
        if (this.basicFormModel.title.length !== 0) {
            const task = new Task({
                title: this.basicFormModel.title,
                isCreatedFromForm: false,
                description: this.basicFormModel.description,
                subTasks: this.basicFormModel.subtaskList
            })
            taskStore.addTask(task);
            this.clearTask();
        }

    }

}



