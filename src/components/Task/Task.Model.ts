import * as React from "react";
import { observable, computed } from "mobx";
import moment, { Moment } from "moment";

const uuid = require("uuidv4");

export enum TaskStatus {
  todo = "todo",
  inProgress = "inProgress",
  done = "done",
}

export interface ITask {
  title: string;
  description?: string;
  date?: string;
}

export class Task extends React.Component<ITask> {
  id: string;
  title: string;
  description?: string;
  @observable minutes: number = 0;
  @observable status: TaskStatus = TaskStatus.todo;
  @observable date: Moment;
  @observable dateCreated: Moment;

  setStatus = (): void => {
    this.status === TaskStatus.todo
      ? (this.status = TaskStatus.done)
      : (this.status = TaskStatus.todo);
  };

  incrementMinutes = () => {
    this.minutes += 1;
  };

  constructor(props: ITask) {
    super(props);
    this.id = uuid();
    this.title = props.title;
    this.description = props.description;
    this.dateCreated = moment();
    this.date = moment();


    if (props.date) {
      this.date = moment(props.date, "DD-MM-YYYY");
    }
  }

  //@todo rename dates
  @computed
  public get dateCreatedFormatted(): string {
    return this.dateCreated.format("Do MMM YY");
  }

  @computed
  public get dateFormatted(): string {
    return this.date.format("Do MMM YY");
  }
}
