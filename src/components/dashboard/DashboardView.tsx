import * as React from 'react';
import { observer } from 'mobx-react';
import store from '../stores/TodoStore';
import TimerViewModel from '../common/Timer/Timer.ViewModel';
import { TimerView } from '../common/Timer/Timer.View'


@observer
class DashboardView extends React.Component {

    vm = new TimerViewModel();



    render() {
        const subtasks = store.activeTask ? store.activeTask.subTasks.map((subtask: string) =>
            <li key={subtask}>{subtask}</li>
        ) : null;


        return (
            <div className="DashboardContainer">
                <div className="clicked-task-info">
                    <h1>{store.activeTask && store.activeTask.title}</h1>
                    <p>{store.activeTask && store.activeTask.description}</p>
                    Status: {store.activeTask && store.activeTask.status}
                    {store.activeTask && <p>Subtasks:</p>}
                    <ul>{store.activeTask && subtasks}</ul>
                    {store.activeTask && <p>Date Created/ Modified:</p>}
                    {store.activeTask && store.activeTask.dateFormatted}
                </div>
                <div className="timer-container"><TimerView vm={this.vm} /></div>
            </div>
        );
    }
}

export default DashboardView;