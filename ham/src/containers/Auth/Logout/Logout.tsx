import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import { Redirect } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { InitialState3 } from '../../../store/reducers/auth';
import { ActionType } from '../../../store/reducers/burgerBuilder';
interface LogoutProps {
  onLogout: () => void;
}
class Logout extends Component<LogoutProps> {
  componentDidMount() {
    this.props.onLogout();
  }

  render() {
    return <Redirect to={'/'} />;
  }
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<InitialState3, void, ActionType>
) => {
  return {
    onLogout: () => dispatch(actions.logout()),
  };
};

export default connect(null, mapDispatchToProps)(Logout);
