import * as React from 'react';
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


  render() {
    //const {store} = this.props;
    return (
      <div className="TasksBoardContainer">
        <BasicFormViewModel />
        <div className='applications-list separated'>Apps</div>
        <div className='application-container separated'>
          <div className='application-options'>Options</div>
          <div className='tasks'>
            <TasksList />
          </div>
          <div className='application-pages'>pages</div>
        </div>
      </div>
    );
  }




}

export default TasksBoard;