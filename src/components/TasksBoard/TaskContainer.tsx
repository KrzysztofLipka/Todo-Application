import React from 'react';

interface ITaskProps {
    title: string;
    description?: string,    
}

const TaskContainer: React.SFC<ITaskProps> = (props)=>{
    
    return(
        <div className='taskContainer'>
            <div className='taskContent'>
                <span>{props.title}</span>
            </div>
        </div>
    )
}

export default TaskContainer