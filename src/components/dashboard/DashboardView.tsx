import * as React from 'react';
import { Provider } from 'mobx-react';
import { taskStore } from '../common/Task/TasksStoreModel';

//import DashboardInputView from '../dashboard/DashboardInput/DashboardInput.View'
interface IDashboardView {
    name: string;
    timerCycles: number;
}



class DashboardView extends React.Component<{}>
{
    /*constructor(props: {}) {
        super(props);
    }*/

    render() {
        return (
            <div className="DashboardContainer separated">
                dashboard
          </div>
        );
    }

}

export default DashboardView;