import React from 'react';
import {observer, inject} from 'mobx-react';
import TaskContainer from './TaskContainer';
import {ITask} from '../common/Task/Task'
import {TodoStore} from '../common/Task/TasksStoreModel'


interface IProps {
    store?: TodoStore
}

@inject('store')
@observer
class TasksList extends React.Component<IProps> 
{
    get injected() {
        return this.props as IProps;
    }

    private store : TodoStore;

    /**
     *
     */
    constructor(props: any) {
        super(props);

        this.store = this.injected.store!;
        
    }
    
    render(){
        //const store = this.props.store;
        return(
            
                this.store.tasks.map((task: any) =>
                <ul>    
                    <li>                   
                        <TaskContainer
                        title= {task.title}/>
                    </li>                             
                </ul>
                
            
            
        ));
    
        }
}

export default TasksList;




