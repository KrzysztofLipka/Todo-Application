import * as React from "react";

const uuid = require('uuidv4');

export interface ITask {
    //id: string;
    title: string;
    description?: string;
}

export class Task extends React.Component<ITask> {

    id: string;
    title: string;
    description?: string;

    constructor(props: ITask) {
        super(props);
        this.id = uuid();
        this.title = props.title;
        this.description = props.description;
        console.log(this.id)
    }

}
