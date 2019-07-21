import React from 'react';
import './App.css';
import Confirm from "./Confirm";
import DashboardView from '../src/components/dashboard/DashboardView';
import TasksBoardView from '../src/components/TasksBoard/TasksBoardView';
//import {Row} from './components/common/Column'
//import Column from './components/common/Column'
import styled from 'styled-components';
import HeaderView from './components/Header/HeaderView';



interface IState {
  confirmOpen: boolean;
}

/*const App: React.FC <IState> = () => */




class App extends React.Component<{}, IState>
{

  constructor(props: {}) {
    super(props);
    this.state = {
    confirmOpen: true,
    };
   }

 
render(){
  return (
    <div className="App">
      <div>
        <HeaderView/>
        <DashboardView/>
        <TasksBoardView/>
        </div>
      
        
    </div>
  );
}
}

export default App;
