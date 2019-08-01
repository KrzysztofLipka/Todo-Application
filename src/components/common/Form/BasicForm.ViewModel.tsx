import * as React from "react";
import BasicForm from './BasicForm.View';
import { inject } from "mobx-react";
import { action } from "mobx"
import { taskStore } from "../Task/TasksStoreModel";
import { Task, ITask } from '../../common/Task/Task';

interface IBasicFormState {
    title: string;
    description: string;
    isAddCheckboxClicked: boolean;

}



//@inject('store')
export default class BasicFormViewModel extends React.Component<{}, IBasicFormState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            title: '',
            description: '',
            isAddCheckboxClicked: false
        }
        this.handleConfirm = this.handleConfirm.bind(this);
    }

    private handleTitleChange = (title: string) => this.setState({ title })

    private handleDescriptionChange = (description: string) => this.setState({ description })

    private clearTask = () => { this.setState({ title: '', description: '' }) };

    private handleAddTaskCheckbox = () => {
        this.state.isAddCheckboxClicked ?
            this.setState({ isAddCheckboxClicked: false }) :
            this.setState({ isAddCheckboxClicked: true })


    }

    private handleConfirm() {
        if (this.state.title.length !== 0) {
            //const task: ITask = {
            //    title: this.state.title,
            //    description: this.state.description
            //}
            const task = new Task({ title: this.state.title, description: this.state.description })
            taskStore.addTask(task);
            this.clearTask();
        }
    }




    public render() {
        return (
            <BasicForm
                title={this.state.title}
                description={this.state.description}
                onTitleChange={this.handleTitleChange}
                onDescriptionChange={this.handleDescriptionChange}
                onConfirm={this.handleConfirm}
                switchAddTaskActive={this.handleAddTaskCheckbox}
                isAddCheckboxClicked={this.state.isAddCheckboxClicked}
            />
        )
    }
}



