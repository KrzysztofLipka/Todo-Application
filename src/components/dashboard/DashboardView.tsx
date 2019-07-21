import * as React from 'react';
import './Dashboard.css';
import { Provider } from 'mobx-react';
import RootStore from './RootStore'

//import DashboardInputView from '../dashboard/DashboardInput/DashboardInput.View'
import DashboardInputProvider from './DashboardInput/DashboardInput.Provider';
interface IDashboardView{
    name: string;
    timerCycles: number;
}
const rootStore = new RootStore();

class DashboardView extends React.Component<{}>
{
    /*constructor(props: {}) {
        super(props);
    }*/

    render(){
        return (
          <div className="DashboardContainer">
            <Provider {...rootStore.getStores()}>
              <DashboardInputProvider/>
              </Provider>
          </div>
        );
      }

}

export default DashboardView;