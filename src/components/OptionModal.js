import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen = {!!props.selectedOption}
    onRequestClose = {props.handleClearModal}
    contentLabel = "Selected Option"
    ariaHideApp={false}
    >
    <h1>Selected Option</h1>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.handleClearModal}>Maybe</button>

  </Modal>
);

export default OptionModal;
