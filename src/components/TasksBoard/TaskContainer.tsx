import React from 'react';
import CheckBox from '../common/CheckBox/CheckBox';
import { TaskStatus } from '../common/Task/Task';




interface ITaskProps {
    id: string;
    title: string;
    description?: string;
    status: TaskStatus;
    onRemove: (deletedTaskId: string) => void,
    onClickOnTask: (id: string) => void,
    onClickDoneCheckbox: (id: string) => void
}

const TaskContainer: React.SFC<ITaskProps> = (props) => {

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
            <div className='task-date'>date</div>
            <div className='task-isdone'>
                <CheckBox onClickDoneCheckbox={handleClickOnDoneCheckbox} />
                {props.status}
            </div>
            {/*<p>{props.description}</p>*/}
            <div className='task-buttons'>
                <button onClick={handleRemove} className='removeButton'>x</button>
            </div>

        </div>
    )
}

export default TaskContainer