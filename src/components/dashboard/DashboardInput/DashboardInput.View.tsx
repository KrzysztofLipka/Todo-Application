import React from 'react';
import DashboardForm from './DashboardForm'
import { tsPropertySignature } from '@babel/types';


interface IDashboardInputView {
    //tasks: string[],
    //setTitle: void,
    //setDescription: void,
    addTask(): void,
    title: string,
    description: string
    handleTitleChange(title:string): void;
    handleDescriptionChange(description: string): void


}

const DashboardInputView: React.SFC<IDashboardInputView> = (props) => {
    
        return (
            <DashboardForm
                onSubmit={props.addTask}
                //onInputChange = {props.setTitle}
                onChangeTitle = {props.handleTitleChange}
                onChangeDescription = {props.handleDescriptionChange}
                title = {props.title}
                description = {props.description}
            />
        )
}

export default DashboardInputView;