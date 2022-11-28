import { AxiosInstance } from 'axios';
import React, { ReactElement, useEffect, useState } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import useHttpErrorHandler from './../../hooks/http-error-handler';
import Auxiliary from '../Auxiliary';
import { OrdersProps } from '../../containers/Orders/Orders';
import { ContactDataProps } from '../../containers/Checkout/ContactData/ContactData';

const withErrorHandler = (
  WrappedComponent: React.FunctionComponent<any>,
  axios: AxiosInstance
) => {
  return (props: JSX.IntrinsicAttributes) => {
    const [error, clearError] = useHttpErrorHandler(axios);

    return (
      <Auxiliary>
        <Modal show={error} modalClosed={clearError}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </Auxiliary>
    );
  };
};

export default withErrorHandler;
