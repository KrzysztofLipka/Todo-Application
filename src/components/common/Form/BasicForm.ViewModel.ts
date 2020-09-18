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
  @observable date: string = "";

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
  public clearTask = () => {
    this.title = "";
    this.description = "";
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
      (!this.date || this.isDateValid) &&
      this.isDescritpionValid &&
      this.isTitleValid
    );
  }

  handleConfirmForm() { }

  handleSubmitForm = () => {
    if (this.title.length !== 0) {
      const task = new Task({
        title: this.title,
        description: this.description,
      });
      taskStore.addTask(task);
      this.clearTask();
    }
  };
}
