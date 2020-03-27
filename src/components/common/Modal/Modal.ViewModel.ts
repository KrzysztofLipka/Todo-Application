
import { observable } from 'mobx';

export class ModalViewModel {
    @observable isDisplayed = false;

    showModal = () => { this.isDisplayed = true }

    hideModal = () => { this.isDisplayed = false }

}

