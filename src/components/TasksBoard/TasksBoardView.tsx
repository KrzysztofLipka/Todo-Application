import * as React from "react";
import BasicFormViewModel from "../common/Form/BasicForm.ViewModel";
import { observer } from "mobx-react";
import TasksList from "../TasksBoard/TasksList";
import { ModalViewModel } from "../common/Modal/Modal.ViewModel";

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
