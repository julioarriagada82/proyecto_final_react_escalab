import React from "react";
import PropTypes from 'prop-types';
import { createPortal } from "react-dom";
import Button from '../button/Button.component'
import '../../../assets/styles/components/Modal.styles.scss';

const Modal = (props) => 
  props.isOpen
    ? createPortal(
        <div className="modal">
          <div className="modal__container">{props.children}</div>
          <Button
              type='secondary'
              size='small'
              onClick={props.onClose}
              text='Cerrar'
            />
        </div>,
        document.getElementById("modal"),
      )
    : "";

export default Modal;

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func.isRequired,
};
