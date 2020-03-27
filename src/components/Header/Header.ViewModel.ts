import { observable } from 'mobx';
import { ModalViewModel } from '../common/Modal/Modal.ViewModel';

export class HeaderViewModel {
    @observable modalVM: ModalViewModel;

    constructor() {
        this.modalVM = new ModalViewModel();
    }
}