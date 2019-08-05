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

            <div className='task-title'>{props.title}</div>
            <div className='task-date'>date</div>
            <div className='task-isdone'>done</div>
            {/*<p>{props.description}</p>*/}
            <div className='task-buttons'>
                <button onClick={handleRemove} className='removeButton'>x</button>
            </div>

        </div>
    )
}

export default TaskContainer