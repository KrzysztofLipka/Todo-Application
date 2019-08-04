import React from 'react';
//import './App.css';
import './Styles/css/mainContainers.css';
import DashboardView from './components/Dashboard/DashboardView';
import TasksBoardView from '../src/components/TasksBoard/TasksBoardView';
//import {Row} from './components/common/Column'
//import Column from './components/common/Column'
import styled from 'styled-components';
import HeaderView from './components/Header/HeaderView';
import { inject, observer } from 'mobx-react';
//import {TasksStoreModel} from '../src/components/common/Task/TasksStoreModel'



interface IProps {
  store: any;
}

/*const App: React.FC <IState> = () => */



@inject('store')
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
