import React from 'react';
import { observable, action, IObservableArray, isObservableArray } from 'mobx'
const uuid = require('uuidv4');

interface ITask {
    id: any
    title: string,
    description: string
}


export class DashboardModel {
    @observable tasks: IObservableArray<ITask>;

    /**
     *
     */
    constructor() {
        this.tasks = [] as any;
         
    }

    @action addTask(task: ITask) {
        this.tasks.push(task)
        console.log([this.tasks]);
    }

    @action removeTask(task:ITask) {
        //var filteredTasks = this.tasks.filter((e: { id: any; }) => e.id!==task.id)
        //this.tasks.replace(filteredTasks)
        this.tasks.remove(task);

    }

    @action clearAll() {
        this.tasks.clear()
    }

    getTasks() {
        return this.tasks
    }
}