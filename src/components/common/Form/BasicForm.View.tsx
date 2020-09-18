import * as React from "react";
import Input from "../MainInput";
import TextArea from "../Input";
import BasicFormViewModel from "./BasicForm.ViewModel";
import { observer } from "mobx-react";

interface IBasicFormProps {
  vm: BasicFormViewModel;
}

@observer
class BasicForm extends React.Component<IBasicFormProps> {
  render() {
    const subtasks = this.props.vm.subtaskList
      ? this.props.vm.subtaskList.map((subtask: string) => (
        <li key={subtask}>{subtask}</li>
      ))
      : null;
    return (
      <div className="form-group">
        <Input
          inputName={"title-input"}
          value={this.props.vm.title}
          onChange={this.props.vm.handleTitleChange}
          onConfirm={this.props.vm.handleConfirmForm}
          isAddCheckboxClicked={this.props.vm.isAddCheckboxClicked}
          placeholderText={"Add Title"}
          isValid={this.props.vm.isTitleValid}
        />
        <TextArea
          inputName={"description-input"}
          value={this.props.vm.description}
          onChange={this.props.vm.handleDescriptionChange}
          onConfirm={this.props.vm.handleConfirmForm}
          isValid={this.props.vm.isDescritpionValid}
        />

        <Input
          inputName={"date-input"}
          value={this.props.vm.date}
          onChange={this.props.vm.handleDateChange}
          onConfirm={this.props.vm.handleConfirmForm}
          isAddCheckboxClicked={this.props.vm.isAddCheckboxClicked}
          placeholderText={"Add Due Date"}
          isValid={this.props.vm.isDateValid}
        />

        <Input
          inputName={"subtask-input"}
          value={this.props.vm.subtask}
          onChange={this.props.vm.handleSubtaskChange}
          onConfirm={this.props.vm.handleConfirmSubtaskInput}
          isAddCheckboxClicked={this.props.vm.isAddCheckboxClicked}
          placeholderText={"Add Subtask and click Enter"}
        />

        <ul>{subtasks}</ul>

        <button
          onClick={this.props.vm.handleSubmitForm}
          disabled={!this.props.vm.isFormValid}
        >
          {" "}
          Add Task{" "}
        </button>
      </div>
    );
  }
}

export default BasicForm;
