import * as React from 'react';
import './TasksBoard.css';
import BasicFormViewModel from '../common/Form/BasicForm.ViewModel'
import { inject, observer } from 'mobx-react';
import TasksList from '../TasksBoard/TasksList'

interface IDashboardViewProps {
  store: any[];
}
//@inject('store')
//@observer
class TasksBoard extends React.Component<{}>
{
    

    render(){
      //const {store} = this.props;
        return (
          <div className="TasksBoardContainer">
                tasks
                <div>
                <BasicFormViewModel/>
                <TasksList/>
                </div>
                
                         
          </div>
        );
      }

    
    
    
}

export default TasksBoard;