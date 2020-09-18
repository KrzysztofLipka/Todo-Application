import { observable, action, reaction } from "mobx";
import store from "../../stores/TodoStore";

export default class TimerViewModel {
  @observable ctime: number = 1500;
  @observable displayedTime: string = "00:00:00";
  @observable isTimerActive: boolean = false;
  timerId: number = 0;

  @observable minutes: number = 0;
  @observable seconds: number = 0;

  handleIncrementTime: () => void;

  constructor(handleIncrementTime: () => void) {
    this.handleIncrementTime = handleIncrementTime;
  }

  @action
  updateTime = () => {
    this.ctime -= 1;
    this.displayedTime = this.convertToString(this.ctime);
    this.handleIncrementTime();
  };

  @action
  resetTime = () => {
    this.ctime = 1500;
    this.displayedTime = "00:00:00";
  };

  twoDigits = (num: number) => {
    return num < 10 ? "0" + num : num;
  };

  convertToString = (seconds: number) => {
    const h = this.twoDigits(Math.floor(seconds / 3600));
    this.minutes = Math.floor((seconds % 3600) / 60);
    this.seconds = Math.floor((seconds % 3600) % 60);
    return `${h}:${this.twoDigits(this.minutes)}:${this.twoDigits(
      this.seconds
    )}`;
  };

  @action
  handleStartPauseButton = () => {
    this.isTimerActive
      ? (this.isTimerActive = false)
      : (this.isTimerActive = true);

    if (this.isTimerActive) {
      store.startProgress();
      this.timerId = setInterval(() => this.updateTime(), 1000);
    } else {
      clearInterval(this.timerId);
    }
  };

  @action
  handleStopButton = () => {
    clearInterval(this.timerId);
    this.isTimerActive = false;
    this.resetTime();
    store.inProgressTask = undefined;
  };
}
