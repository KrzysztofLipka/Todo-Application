import * as React from "react";
import { observer } from "mobx-react";
import store from "../stores/TodoStore";
import { TimerView } from "../common/Timer/Timer.View";

@observer
class DashboardView extends React.Component {


  render() {
    return (
      <div className="DashboardContainer">
        {store.activeTask ? (<>
          <h1 className='title'>{store.activeTask.title}</h1>
          <p className='description'>{store.activeTask.description}</p>
          <div className="clicked-task-info">
            Status: {store.activeTask.status}

            {<p>Date Created/ Modified:</p>}
            {store.activeTask.dateFormatted}
          </div>
        </>) :
          <h1 className='title'>{'Click on task to get details'}</h1>
        }
        <div className="timer-container">
          <TimerView vm={store.timerVM} />
        </div>
      </div>
    );
  }
}

export default DashboardView;
