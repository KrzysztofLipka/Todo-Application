import taskStore from "../../stores/TodoStore";
import { Task } from "../../Task/Task.Model";
import { observable, action, computed } from "mobx";
import moment from "moment";

export default class BasicFormViewModel {
  //basicFormModel: BasicFormModel;

  @observable fastInputValue: string = "";
  @observable title: string = "";
  @observable description: string = "";
  @observable isAddCheckboxClicked: boolean = false;
  @observable subtaskList: string[] = [];
  @observable date: string = "";
  @observable subtask: string = "";

  @observable isNumberOfSubtasksValid: boolean = true;

  @action
  public handleTitleChange = (title: string) => {
    this.title = title;
  };

  @action
  public handlefastInputValueChange = (value: string) => {
    this.fastInputValue = value;
  };

  @action
  public handleDescriptionChange = (description: string) =>
    (this.description = description);

  @action
  public handleDateChange = (date: string) => {
    this.date = date;
  };

  @action
  public handleSubtaskChange = (subtask: string) => {
    this.subtask = subtask;
  };

  @action
  public handleConfirmSubtaskInput = (subtask?: string) => {
    if (!!subtask) {
      this.subtaskList.push(subtask);
    } else {
      if (this.subtask) {
        this.subtaskList.push(this.subtask);
      }
    }

    this.subtask = "";
  };

  @action
  public clearTask = () => {
    this.title = "";
    this.description = "";
    this.subtaskList = [];
  };

  @computed
  public get isDateValid() {
    return moment(this.date).isValid();
  }

  @computed
  public get isDescritpionValid() {
    return this.description.length < 40;
  }

  @computed
  public get isTitleValid() {
    return this.title.length < 20;
  }

  @computed
  public get isFormValid() {
    return (
      this.isDateValid &&
      this.isDescritpionValid &&
      this.isTitleValid &&
      this.isNumberOfSubtasksValid
    );
  }

  handleConfirmForm() { }

  handleSubmitForm = () => {
    if (this.title.length !== 0) {
      const task = new Task({
        title: this.title,
        isCreatedFromForm: false,
        description: this.description,
        subTasks: this.subtaskList,
      });
      taskStore.addTask(task);
      this.clearTask();
    }
  };
}
