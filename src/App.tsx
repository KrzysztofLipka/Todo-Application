import React from "react";
import "./Styles/css/mainContainers.css";
import "./Styles/css/inputPanel.css";
import "./Styles/css/taskPanel.css";
import "./Styles/css/checkBox.css";
import "./Styles/css/timer.css";
import TasksBoardView from "../src/components/TasksBoard/TasksBoardView";
import HeaderView from "./components/Header/HeaderView";
import { HeaderViewModel } from "./components/Header/Header.ViewModel";
import { observer } from "mobx-react";
import DashboardView from "./components/dashboard/DashboardView";
import BasicFormViewModel from "../src/components/common/Form/BasicForm.ViewModel";

@observer
class App extends React.Component<{}> {
  headerVm = new HeaderViewModel();
  formVm = new BasicFormViewModel();

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <HeaderView
            headerVM={this.headerVm}
            formVm={this.formVm}
          />

          <DashboardView />
          <TasksBoardView />
        </div>
      </div>
    );
  }
}

export default App;
