import React, { MouseEventHandler } from 'react';
import Auxiliary from '../../../HOC/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';
import './Modal.css';

export interface PropsModal {
  children: React.ReactNode;
  show?: boolean;
  modalClosed?: MouseEventHandler;
}
const Modal: React.FunctionComponent<PropsModal> = (props) => {
  return (
    <Auxiliary>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className='Modal'
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0',
        }}
      >
        {props.children}
      </div>
    </Auxiliary>
  );
};

export default React.memo(
  Modal,
  (prevProps, nextProps) =>
    nextProps.show == prevProps.show && nextProps.children == prevProps.children
);
