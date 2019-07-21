import React from 'react';
import DashboardInputView from  './DashboardInput.View'
import { string } from 'prop-types';

export interface IState {
    title: string;
    description: string;
}

export interface IDashboardInputControllerProps{
 viewModel:any;
}

interface IDashboardInputController {

    state: IState;

    //setTitle(e: any): void;

    clearTitle(): void;

    setDescription(e: React.ChangeEvent<HTMLInputElement>): void;

    clearDescription(): void;

    saveTask(): void;

    addTask(): void;

}

export class DashboardInputController 
extends React.Component<IDashboardInputControllerProps> implements IDashboardInputController
 {
    

    state = {
        title: '',
        description: ''
    }

    viewModel : any;

    /**
     *
     */
    constructor(props:IDashboardInputControllerProps) {
        super(props);
        this.viewModel = props.viewModel;
        
    }

    //setTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    //    this.setState({title: e.target.value});
    //}    
    
    clearTitle(): void {
        this.setState({title:''})
    }

    setDescription(e: React.ChangeEvent<HTMLInputElement>): void {
        this.setState({description: e.target.value})
    }

    clearDescription(): void {
        this.setState({description:''})
    }

    handleTitleChange = (title: string): void => {
        this.setState({title: string})
    }

    handleDescriptionChange = (title: string): void => {
        this.setState({description: string})
    }

    saveTask =(): void => {
        this.viewModel.addTask({
            title :this.state.title,
            description: this.state.description
        });
    }

    addTask(): void {
        this.saveTask();
        this.clearTitle();
        this.clearDescription();
        console.log('xd');
    }

    //getTitle(): string {
    //    return this.state.title
    //}

    //getTitle(): string {
    //    return this.state.description
   // }

    render(){
        return(
            <DashboardInputView
                //tasks = {viewModel.getTasks()}
                //setTitle = {this.setTitle(e)}
                handleTitleChange = {this.handleTitleChange}
                handleDescriptionChange = {this.handleDescriptionChange}
                addTask= {() =>this.addTask()}
                title = {this.state.title}
                description = {this.state.description}
            />
        )
    }

    
}