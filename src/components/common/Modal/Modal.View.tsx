import React, { Component } from "react";
import ReactDOM from "react-dom";
import { ModalViewModel } from './Modal.ViewModel';
import { observer } from 'mobx-react';

interface IModalProps {
    vm: ModalViewModel;
}

@observer
export class Modal extends React.Component<IModalProps> {


    render() {
        const showModal = this.props.vm.isDisplayed
            ? 'modal display-block'
            : 'modal display-none';

        return (
            <div className={showModal}>
                <section className='modal-main'>
                    Modal
                    {this.props.children}
                    <button onClick={this.props.vm.hideModal}>Close</button>
                </section>

            </div>
        )
    }



}