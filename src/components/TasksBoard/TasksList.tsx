import React from 'react';
import { observer, inject } from 'mobx-react';
import TaskContainer from './TaskContainer';
import { ITask } from '../common/Task/Task'
import { TodoStore } from '../common/Task/TasksStoreModel';
import CheckBox from '../common/CheckBox/CheckBox';

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

            this.store.getTasks.map((task: any) =>

                <div className='task' key={task.id}>
                    <TaskContainer
                        id={task.id}
                        title={task.title}
                        status={task.status}
                        description={task.description}
                        onRemove={this.store.removeTask}
                        onClickOnTask={this.store.clickTask}
                        onClickDoneCheckbox={this.store.doneTask}
                        minutesSpent={task.minutes}

                    />
                </div>




            ));

    }
}

export default TasksList;




