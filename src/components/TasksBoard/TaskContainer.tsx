import React from 'react';


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
                <p>{props.title}</p>
                <p>{props.description}</p>
                <button onClick={handleRemove} className='removeButton'>x</button>
            </div>
        </div>
    )
}

export default TaskContainer