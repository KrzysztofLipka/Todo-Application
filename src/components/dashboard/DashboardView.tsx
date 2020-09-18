import * as React from "react";
import { observer } from "mobx-react";
import store from "../stores/TodoStore";
import TimerViewModel from "../common/Timer/Timer.ViewModel";
import { TimerView } from "../common/Timer/Timer.View";

@observer
class DashboardView extends React.Component {
  //vm = new TimerViewModel();

  render() {
    const subtasks = store.activeTask
      ? store.activeTask.subTasks.map((subtask: string) => (
        <li key={subtask}>{subtask}</li>
      ))
      : null;

    return (
      <div className="DashboardContainer">
        {store.activeTask && (<>
          <h1 className='title'>{store.activeTask.title}</h1>
          <p className='description'>{store.activeTask.description}</p>
          <div className="clicked-task-info">

            Status: {store.activeTask.status}
            {<p>Subtasks:</p>}
            <ul>{subtasks}</ul>
            {<p>Date Created/ Modified:</p>}
            {store.activeTask.dateFormatted}
          </div>
        </>)}
        <div className="timer-container">
          <TimerView vm={store.timerVM} />
        </div>
      </div>
    );
  }
}

export default DashboardView;
