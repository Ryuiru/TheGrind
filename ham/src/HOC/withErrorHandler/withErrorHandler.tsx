import { AxiosInstance } from 'axios';
import React from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Auxiliary from '../Auxiliary';
interface State {
  error: boolean | null;
}
const withErrorHandler = (
  WrappedComponent: typeof React.Component,
  axios: AxiosInstance
) => {
  return class extends React.Component<{}, State> {
    state = {
      error: null,
    };
    reqInterceptor!: number;
    resInterceptor!: number;

    componentDidMount() {
      this.reqInterceptor = axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });
      this.resInterceptor = axios.interceptors.response.use(
        (res) => res,
        (error: boolean) => {
          console.log('Error Handler:', error);
          this.setState({ error: error });
        }
      );
    }
    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }
    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };
    render() {
      return (
        <Auxiliary>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}
          >
            {this.state.error ? this.state.error['message'] : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Auxiliary>
      );
    }
  };
};

export default withErrorHandler;
