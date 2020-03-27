import { observable, action, reaction, computed } from 'mobx';
import { } from '../../utils/StringParser';
import { threadId } from 'worker_threads';
import moment from 'moment';


export class BasicFormModel {

    @observable fastInputValue: string;

    @observable title: string;
    @observable description: string;
    @observable isAddCheckboxClicked: boolean;
    @observable subtaskList: string[];
    @observable date: string;
    @observable subtask: string;

    @observable isTitleValid: boolean = false;
    @observable isDescritpionValid: boolean = false;
    @observable isDateValid: boolean = false;
    @observable isNumberOfSubtasksValid: boolean = true;

    constructor() {
        this.fastInputValue = '';
        this.title = '';
        this.description = '';
        this.date = '';
        this.subtaskList = [];
        this.subtask = '';
        this.isAddCheckboxClicked = false;

        reaction(
            () => this.title,
            (title) => {
                this.isTitleValid = title.length < 20;
            }
        )

        reaction(
            () => this.description,
            (description) => {
                this.isDescritpionValid = description.length < 40;
            }
        )

        reaction(
            () => this.date,
            (date) => {
                this.isDateValid = moment(date).isValid();
            }
        )


    }


    @action
    setTitle = (title: string) => {
        this.title = title;
    }

    @action
    setDescription = (description: string) => {
        this.description = description;
    }

    @action
    setFastInputValue = (value: string) => {
        this.fastInputValue = value;
    }

    @action
    addSubtask = (subtask?: string) => {
        if (subtask) {
            this.subtaskList.push(subtask);
        } else {
            if (this.subtask) {
                this.subtaskList.push(this.subtask)
            }
        }

        this.subtask = '';

    }

    @action
    setSubtask = (subtask: string) => {
        this.subtask = subtask;
    }

    @action
    deleteSubtask = (subtaskToDelete: string) => {
        this.subtaskList.filter(subtask => subtask !== subtaskToDelete);
    }

    @action
    swithchIsAddCheckboxClicked = () => {
        this.isAddCheckboxClicked
            ? this.isAddCheckboxClicked = false
            : this.isAddCheckboxClicked = true
    }

    @action
    setDate = (date: string) => {
        this.date = date;
    }

    clearData = () => {
        this.setTitle('');
        this.setDescription('');
        this.subtaskList = [];
    }

    @computed
    public get isFormValid() {
        return this.isDateValid
            && this.isDescritpionValid
            && this.isTitleValid
            && this.isNumberOfSubtasksValid
    }

}