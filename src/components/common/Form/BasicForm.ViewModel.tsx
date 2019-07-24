import * as React from "react";
import BasicForm from './BasicForm.View';
import { inject } from "mobx-react";
import { taskStore } from "../Task/TasksStoreModel";
import {Task, ITask} from '../../common/Task/Task';

interface IBasicFormState {
    title: string;
    description: string;
    
}



//@inject('store')
export default class BasicFormViewModel extends React.Component<{}, IBasicFormState> {

    constructor(props: {}) {
        super(props);
        this.state = { title: '',
        description: '' }
        this.handleConfirm = this.handleConfirm.bind(this);

    }


    private handleTitleChange = (title: string) => this.setState({title})

    private handleDescriptionChange = (description: string) => this.setState({description})

    private handleConfirm() {
        console.log('confirm');
        const task: ITask={
            title: this.state.title
        }
        taskStore.addTask(task);

    }


    

    public render() {
        return(
            <BasicForm 
            title = {this.state.title}
            description = {this.state.description}
            onTitleChange = {this.handleTitleChange}
            onDescriptionChange = {this.handleDescriptionChange}
            onConfirm = { this.handleConfirm }
            />
        )
    }
}



