import * as React from 'react';
import BasicFormViewModel from '../common/Form/BasicForm.ViewModel';
import BasicForm from '../common/Form/BasicForm.View'
import { observer } from 'mobx-react';
import TasksList from '../TasksBoard/TasksList';
import { Modal } from '../common/Modal/Modal.View'
import { ModalViewModel } from '../common/Modal/Modal.ViewModel';
import Input from '../common/MainInput';


@observer
class TasksBoard extends React.Component<{}>
{

  vm = new BasicFormViewModel();
  modalVm = new ModalViewModel();

  render() {
    return (
      <div className="TasksBoardContainer">

        <div className='input-panel'>
          {this.modalVm.isDisplayed &&
            <Modal vm={this.modalVm} >
              <BasicForm vm={this.vm} />
            </Modal>}
          <Input
            inputName={'fastInput'}
            onChange={this.vm.handlefastInputValueChange}
            value={this.vm.basicFormModel.fastInputValue}
            onConfirm={this.vm.handleConfirm}
            switchAddTaskActive={this.vm.handleAddTaskCheckbox}
            isAddCheckboxClicked={this.vm.basicFormModel.isAddCheckboxClicked}
            placeholderText={'Fast search or create task...'}
          />
          <button className='new-task' onClick={this.modalVm.showModal}>New Task</button>
          <button className='edit-task' onClick={this.modalVm.showModal}>Edit</button>
        </div>
        <div className='application-container'>
          <div className='tasks'>
            <TasksList />
          </div>
        </div>
      </div>
    );
  }




}

export default TasksBoard;