import * as React from "react";
import BasicForm from './BasicForm.View';
import { inject } from "mobx-react";
import { action } from "mobx"
import { taskStore } from "../Task/TasksStoreModel";
import { Task, ITask } from '../../common/Task/Task';

interface IBasicFormState {
    title: string;
    description: string;

}



//@inject('store')
export default class BasicFormViewModel extends React.Component<{}, IBasicFormState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            title: '',
            description: ''
        }
        this.handleConfirm = this.handleConfirm.bind(this);
    }

    private handleTitleChange = (title: string) => this.setState({ title })

    private handleDescriptionChange = (description: string) => this.setState({ description })

    private clearTask = () => { this.setState({ title: '', description: '' }) };

    private handleConfirm() {
        if (this.state.title.length !== 0) {
            //const task: ITask = {
            //    title: this.state.title,
            //    description: this.state.description
            //}
            const task2 = new Task({ title: this.state.title, description: this.state.description })
            taskStore.addTask(task2);
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
            />
        )
    }
}



