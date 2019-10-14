import * as React from 'react';
import { observer } from 'mobx-react';
import store from '../stores/TodoStore';
import TimerViewModel from '../common/Timer/Timer.ViewModel';
import { TimerView } from '../common/Timer/Timer.View'


@observer
class DashboardView extends React.Component {

    vm = new TimerViewModel();

    render() {
        return (
            <div className="DashboardContainer separated">
                <div className="clicked-task-info">
                    <h1>{store.activeTask && store.activeTask.title}</h1>
                    {store.activeTask && store.activeTask.description}
                    {store.activeTask && store.activeTask.status}</div>
                <div className="timer-container"><TimerView vm={this.vm} /></div>
            </div>
        );
    }
}

export default DashboardView;