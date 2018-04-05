import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen = {!!props.selectedOption} //Open/Close state of modal depends on this state which is changed to boolean
    onRequestClose = {props.handleClearModal} // Required for closing modal on clicking ESC or outside modal
    contentLabel = "Selected Option"
    ariaHideApp={false}
    closeTimeoutMS={200} // Required for closing transition of modal
    className="modal" // Required for overriding css of modal
    >
    <h1 className="modal__title">Selected Option</h1>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button" onClick={props.handleClearModal}>Maybe I will</button>
  </Modal>
);

export default OptionModal;
