import React from 'react';
import './Styles/css/mainContainers.css';
import './Styles/css/inputPanel.css';
import './Styles/css/taskPanel.css';
import './Styles/css/checkBox.css';
import './Styles/css/timer.css';
import TasksBoardView from '../src/components/TasksBoard/TasksBoardView';
import HeaderView from './components/Header/HeaderView';
import { HeaderViewModel } from './components/Header/Header.ViewModel';
import { observer } from 'mobx-react';
import DashboardView from './components/dashboard/DashboardView';

@observer
class App extends React.Component<{}>
{
  headerVm = new HeaderViewModel()
  render() {
    return (
      <div className="App">

        <div className="wrapper">
          <div className="logo"></div>
          <HeaderView headerVm={this.headerVm} />
          <DashboardView />
          <TasksBoardView />
        </div>
      </div>
    );
  }
}

export default App;
