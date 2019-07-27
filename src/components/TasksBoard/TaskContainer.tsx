import React from 'react';
import './TasksBoard.css'

interface ITaskProps {
    id: string;
    title: string;
    description?: string,
    onRemove: (deletedTaskId: string) => void
}

const TaskContainer: React.SFC<ITaskProps> = (props) => {

    const handleRemove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        props.onRemove(props.id)
    }

    return (
        <div className='taskContainer'>
            <div className='taskContent'>
                <span>{props.title}</span>
                <span>{props.description}</span>
                <button onClick={handleRemove} className='removeButton'>x</button>
            </div>
        </div>
    )
}

export default TaskContainer