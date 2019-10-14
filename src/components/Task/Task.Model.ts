import * as React from "react";
import { observable } from 'mobx';


const uuid = require('uuidv4');

export enum TaskStatus {
    todo = 'todo',
    inProgress = 'inProgress',
    done = 'done'
}

export interface ITask {
    title: string;
    description?: string;
    todoList?: string[];
}

export class Task extends React.Component<ITask> {

    id: string;
    title: string;
    description?: string;
    @observable minutes: number = 0;
    @observable status: TaskStatus = TaskStatus.todo;

    setStatus = (): void => {
        this.status === TaskStatus.todo ?
            this.status = TaskStatus.done :
            this.status = TaskStatus.todo;
    }

    incrementMinutes = () => this.minutes += 1;

    constructor(props: ITask) {
        super(props);
        this.id = uuid();
        this.title = props.title;
        this.description = props.description;
    }

}

