import React from "react";
import { observable, action, reaction, when } from 'mobx';
import { number } from "prop-types";
import { observer, inject } from 'mobx-react'
import { TodoStore } from '../../common/Task/TasksStoreModel';
import { TimerView } from './Timer.View'


interface TimerState {
    workTime: number;
    isActive: boolean;
}

interface IProps {
    store?: TodoStore;
}
@inject('store')
@observer
export default class TimerViewModel extends React.Component<{}, TimerState, IProps>
{
    @observable ctime: number = 1500;
    @observable displayedTime: string = '00:00:00';
    @observable isTimerActive: boolean = false;
    timerId: number = 0;


    get injected() {
        return this.props as IProps;
    }

    @observable minutes: number = 0;
    @observable seconds: number = 0;

    private store: TodoStore;

    constructor(props: {}) {
        super(props);

        this.store = this.injected.store!;
    }


    @action
    updateTime = () => {
        this.ctime -= 1;
        this.displayedTime = this.convertToString(this.ctime);
    }

    @action
    resetTime = () => {
        this.ctime = 1500;
        this.displayedTime = '00:00:00'
    }

    twoDigits = (num: number) => {
        return num < 10 ? "0" + num
            : num;
    }

    handleMinutesChange = reaction(
        () => this.seconds, () => {
            if (this.store.inProgressTask) { this.store.inProgressTask.incrementMinutes() }
        }
    )

    convertToString = (seconds: number) => {
        const h = this.twoDigits(Math.floor(seconds / 3600));
        this.minutes = Math.floor((seconds % 3600) / 60);
        this.seconds = Math.floor(seconds % 3600 % 60);

        return `${h}:${this.twoDigits(this.minutes)}:${this.twoDigits(this.seconds)}`;
    }

    @action
    handleStartPauseButton = () => {
        this.isTimerActive ?
            this.isTimerActive = false :
            this.isTimerActive = true;

        if (this.isTimerActive) {
            this.store.startProgress();
            this.timerId = setInterval(() => this.updateTime(), 1000);

        } else {
            clearInterval(this.timerId);
        }
    }

    @action
    handleStopButton = () => {
        clearInterval(this.timerId);
        this.isTimerActive = false;
        this.resetTime();
        this.store.inProgressTask = undefined;
    }

    /*playPauseButton = () => {
        if (this.isTimerActive) {
            return <PauseButton />
        } else return <PlayButton />
    }*/

    render() {

        const PlayButton: React.SFC = () => {
            return (
                <svg height="16" width="16">
                    <polygon points="0,0 0,16 16,8" />
                    Sorry, your browser does not support inline SVG.
                </svg>
            )
        }

        const PauseButton: React.SFC = () => {
            return (
                <svg width="16" height="16">
                    <polygon points="0,0 0,16 5,16 5,0" />
                    <polygon points="11,0 11,16 16,16 16,0" />
                    Sorry, your browser does not support inline SVG.
                </svg>
            )
        }



        return (
            <div>
                <TimerView
                    isTimerActive={this.isTimerActive}
                    handleStartPauseButton={this.handleStartPauseButton}
                    handleStopButton={this.handleStopButton}
                    ctime={this.ctime}
                    displayedTime={this.displayedTime}
                />
            </div>
        )
    }

};






