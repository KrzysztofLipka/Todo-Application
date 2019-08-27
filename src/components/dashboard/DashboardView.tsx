import * as React from 'react';
import { Provider } from 'mobx-react';
import { taskStore } from '../common/Task/TasksStoreModel';
import { observer, inject } from 'mobx-react';
import { TodoStore } from '../common/Task/TasksStoreModel';
import TimerViewModel from '../common/Timer/Timer';
import { TimerView } from '../common/Timer/Timer.View'

//import DashboardInputView from '../dashboard/DashboardInput/DashboardInput.View'
interface IDashboardView {
    name: string;
    timerCycles: number;
}

interface IProps {
    store?: TodoStore
}

@inject('store')
@observer
class DashboardView extends React.Component<IProps>
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
            <div className="DashboardContainer separated">
                <div className="clicked-task-info"> {this.store.activeTask && this.store.activeTask.title}
                    <h1>{this.store.activeTask && this.store.activeTask.description}</h1>
                    {this.store.activeTask && this.store.activeTask.status}</div>
                <div className="timer-container"><TimerViewModel /></div>
            </div>
        );
    }

}

export default DashboardView;