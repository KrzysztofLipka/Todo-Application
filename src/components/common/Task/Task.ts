import * as React from "react";

const uuid = require('uuidv4');

export enum TaskStatus {
    todo = 'todo',
    inProgress = 'inProgress',
    done = 'done'
}

export interface ITask {
    //id: string;
    title: string;
    description?: string;
    //setStatus: (status: TaskStatus) => void;
}

export class Task extends React.Component<ITask> {

    id: string;
    title: string;
    description?: string;
    status: string = TaskStatus.todo;

    setStatus = (status: TaskStatus): void => {
        this.status = status;
    }

    constructor(props: ITask) {
        super(props);
        this.id = uuid();
        this.title = props.title;
        this.description = props.description;
    }

}
