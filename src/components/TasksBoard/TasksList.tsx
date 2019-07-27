import React from 'react';
import { observer, inject } from 'mobx-react';
import TaskContainer from './TaskContainer';
import { ITask } from '../common/Task/Task'
import { TodoStore } from '../common/Task/TasksStoreModel'
import './TasksBoard.css'


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

    private store: TodoStore;

    constructor(props: any) {
        super(props);

        this.store = this.injected.store!;

    }

    render() {

        return (

            this.store.tasks.map((task: any) =>

                <div className='task' key={task.id}>
                    <TaskContainer
                        id={task.id}
                        title={task.title}
                        description={task.description}
                        onRemove={this.store.removeTask}
                    />
                </div>




            ));

    }
}

export default TasksList;




