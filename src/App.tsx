import React from 'react';
import './Styles/css/mainContainers.css';
import './Styles/css/inputPanel.css';
import './Styles/css/taskPanel.css';
import './Styles/css/checkBox.css';
import './Styles/css/timer.css';
import TasksBoardView from '../src/components/TasksBoard/TasksBoardView';
import HeaderView from './components/Header/HeaderView';
import { observer } from 'mobx-react';
import DashboardView from './components/dashboard/DashboardView';

@observer
class App extends React.Component<{}>
{
  render() {
    return (
      <div className="App">
        <HeaderView />
        <div className="wrapper">
          <DashboardView />
          <TasksBoardView />
        </div>
      </div>
    );
  }
}

export default App;
