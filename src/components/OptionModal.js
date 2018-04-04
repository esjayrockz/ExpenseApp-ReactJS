import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen = {!!props.selectedOption}
    onRequestClose = {props.handleClearModal}
    contentLabel = "Selected Option"
    ariaHideApp={false}
    closeTimeoutMS={200}
    className="modal"
    >
    <h1 className="modal__title">Selected Option</h1>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button" onClick={props.handleClearModal}>Maybe I will</button>

  </Modal>
);

export default OptionModal;
