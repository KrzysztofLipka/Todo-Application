import React from "react";
import { observer } from 'mobx-react'
import { PauseButton, PlayButton } from '../Icons';
import TimerViewModel from './Timer.ViewModel'


interface ITimerViewProps {
    vm: TimerViewModel;
}

@observer
export class TimerView extends React.Component<ITimerViewProps>{
    render() {
        return (
            <div className="timer-container">
                <div><span id='time'>{this.props.vm.displayedTime}</span></div>
                <div>
                    <button className="play-button" onClick={this.props.vm.handleStartPauseButton}>
                        {this.props.vm.isTimerActive ? <PauseButton /> : <PlayButton />}
                    </button>

                    <button className="stop-button" onClick={this.props.vm.handleStopButton}>
                        <svg width="16" height="16">
                            <rect width="16" height="16" />
                            Sorry, your browser does not support inline SVG.
                        </svg>
                    </button>
                </div>
            </div>
        )
    }
}