import { observable, action } from 'mobx'

export class BasicFormModel {
    @observable title: string;
    @observable description: string;
    @observable isAddCheckboxClicked: boolean;

    constructor() {
        this.title = '';
        this.description = '';
        this.isAddCheckboxClicked = false;
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
    swithchIsAddCheckboxClicked = () => {
        this.isAddCheckboxClicked
            ? this.isAddCheckboxClicked = false
            : this.isAddCheckboxClicked = true
    }


    clearData = () => {
        this.setTitle('');
        this.setDescription('');
    }


}