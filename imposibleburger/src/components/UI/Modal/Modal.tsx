import React, { MouseEventHandler } from 'react';
import Auxiliary from '../../../HOC/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';
import './Modal.css';

export interface PropsModal {
  children: React.ReactNode;
  show?: string | boolean | undefined | null;
  modalClosed?: MouseEventHandler | undefined;
}
class Modal extends React.Component<PropsModal> {
  shouldComponentUpdate(
    nextProps: Readonly<PropsModal>,
    nextState: Readonly<{}>
  ): boolean {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }
  // componentDidUpdate(
  //   prevProps: Readonly<PropsModal>,
  //   prevState: Readonly<{}>,
  //   snapshot?: any
  // ): void {
  //   console.log('updated');
  // }
  render() {
    return (
      <Auxiliary>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className='Modal'
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0',
          }}
        >
          {this.props.children}
        </div>
      </Auxiliary>
    );
  }
}

export default Modal;
