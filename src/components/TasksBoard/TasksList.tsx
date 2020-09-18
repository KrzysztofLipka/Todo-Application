import React from "react";
import { observer } from "mobx-react";
import { TaskView } from "../Task/Task.View";
import { Task } from "../Task/Task.Model";
import store from "../stores/TodoStore";

@observer
class TasksList extends React.Component {

  render() {
    const headers = (
      <div className="table-header">
        <div>Title</div>
        <div>Time Spent</div>
        <div>Is Done</div>
        <div>Created/Modified</div>
        <div>Actions</div>
      </div>
    );

    const items = store.getTasks.map((task: Task) => (
      <div className="task" key={task.id}>
        <TaskView
          id={task.id}
          title={task.title}
          status={task.status}
          description={task.description}
          onRemove={store.removeTask}
          onClickOnTask={store.clickTask}
          onClickDoneCheckbox={store.doneTask}
          minutesSpent={task.minutes}
          createdDate={task.dateCreatedFormatted}
        />
      </div>
    ));
    return (
      <div className="tasks-list">
        {headers}
        {items}
      </div>
    );
  }
}

export default TasksList;
