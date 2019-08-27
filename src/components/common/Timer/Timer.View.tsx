import React from "react";
import { observable, action, reaction, when } from 'mobx';
import { number } from "prop-types";
import { observer, inject } from 'mobx-react'
import { TodoStore } from '../../common/Task/TasksStoreModel';
import { PauseButton, PlayButton } from '../Icons';
import TimerViewModel from './Timer'


interface ITimerViewProps {
    isTimerActive: boolean;
    handleStartPauseButton: () => void;
    handleStopButton: () => void;
    ctime: number;
    displayedTime: string;
}


export class TimerView extends React.Component<ITimerViewProps>{


    constructor(props: ITimerViewProps) {
        super(props);
    }




    render() {
        return (

            <div className="timer-container">
                <div><span id='time'>{this.props.displayedTime}</span></div>
                <div><button className="play-button" onClick={this.props.handleStartPauseButton}>
                    {this.props.isTimerActive ? <PauseButton /> : <PlayButton />}


                </button>
                    <button className="stop-button" onClick={this.props.handleStopButton}>
                        <svg width="16" height="16">
                            <rect width="16" height="16" />
                            Sorry, your browser does not support inline SVG.
                </svg>
                    </button></div>

            </div>
        )
    }



}