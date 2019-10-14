import * as React from 'react';
import BasicFormViewModel from '../common/Form/BasicForm.ViewModel';
import BasicForm from '../common/Form/BasicForm.View'
import { observer } from 'mobx-react';
import TasksList from '../TasksBoard/TasksList'

@observer
class TasksBoard extends React.Component<{}>
{

  vm = new BasicFormViewModel();

  render() {
    return (
      <div className="TasksBoardContainer">
        <BasicForm vm={this.vm} />
        <div className='applications-list separated'>
        </div>
        <div className='application-container separated'>
          <div className='application-options'>Options</div>
          <div className='tasks'>
            <TasksList />
          </div>
        </div>
      </div>
    );
  }




}

export default TasksBoard;