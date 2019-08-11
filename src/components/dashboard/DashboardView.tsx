import * as React from 'react';
import { Provider } from 'mobx-react';
import { taskStore } from '../common/Task/TasksStoreModel';
import { observer, inject } from 'mobx-react';
import { TodoStore } from '../common/Task/TasksStoreModel'

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
                <div> {this.store.activeTask && this.store.activeTask.title}
                    {this.store.activeTask && this.store.activeTask.description}</div>
            </div>
        );
    }

}

export default DashboardView;