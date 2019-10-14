import React from 'react';
import CheckBox from '../common/CheckBox';
import { TaskStatus } from './Task.Model';

interface ITaskProps {
    id: string;
    title: string;
    description?: string;
    status: TaskStatus;
    minutesSpent: number;
    onRemove: (deletedTaskId: string) => void,
    onClickOnTask: (id: string) => void,
    onClickDoneCheckbox: (id: string) => void
}

export const TaskView: React.SFC<ITaskProps> = (props) => {

    const handleRemove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        props.onRemove(props.id)
    }
    const handleClickOnTask = () => {
        props.onClickOnTask(props.id);
    }

    const handleClickOnDoneCheckbox = () => {
        props.onClickDoneCheckbox(props.id);
    }

    return (
        <div className='taskContainer' onClick={handleClickOnTask}>
            <div className='task-title'>{props.title}</div>
            <div className='task-date'>{props.minutesSpent}</div>
            <div className='task-isdone'>
                <CheckBox onClickDoneCheckbox={handleClickOnDoneCheckbox} />
                {props.status}
            </div>
            <div className='task-buttons'>
                <button
                    onClick={handleRemove}
                    className='removeButton'>x</button>
            </div>
        </div>
    )
}

