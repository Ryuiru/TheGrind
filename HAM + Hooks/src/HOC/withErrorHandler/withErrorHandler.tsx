import { AxiosInstance } from 'axios';
import React, { ReactElement, useEffect, useState } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import useHttpErrorHandler from './../../hooks/http-error-handler';
import Auxiliary from '../Auxiliary';

const withErrorHandler = (
  WrappedComponent: React.FunctionComponent<{}>,
  axios: AxiosInstance
) => {
  return (
    props: JSX.IntrinsicAttributes &
      JSX.IntrinsicClassAttributes<React.Component> &
      Readonly<{}>
  ) => {
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
