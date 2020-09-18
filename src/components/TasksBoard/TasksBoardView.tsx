import * as React from "react";
import BasicFormViewModel from "../common/Form/BasicForm.ViewModel";
import BasicForm from "../common/Form/BasicForm.View";
import { observer } from "mobx-react";
import TasksList from "../TasksBoard/TasksList";
import { Modal } from "../common/Modal/Modal.View";
import { ModalViewModel } from "../common/Modal/Modal.ViewModel";
import Input from "../common/MainInput";

@observer
class TasksBoard extends React.Component<{}> {
  vm = new BasicFormViewModel();
  modalVm = new ModalViewModel();

  render() {
    return (
      <div className="TasksBoardContainer">

        <div className="application-container">
          <div className="tasks">
            <TasksList />
          </div>
        </div>
      </div>
    );
  }
}

export default TasksBoard;
