import React from 'react';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './../Auth/Auth.module.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import { ActionType, InitialState } from '../../store/reducers/burgerBuilder';
import { updateObject, checkValidity } from '../../shared/utility';
import { InitialState3 } from '../../store/reducers/auth';
interface Controls {
  email?: {
    elementType: string;
    elementConfig: {
      type: string;
      placeholder: string;
    };
    value: string;
    validation: {
      required: boolean;
      isEmail: boolean;
    };
    valid: boolean;
    touched: boolean;
  };
  password?: {
    elementType: string;
    elementConfig: {
      type: string;
      placeholder: string;
    };
    value: string;
    validation: {
      required: boolean;
      minLength: number;
    };
    valid: boolean;
    touched: boolean;
  };
}
interface AuthState {
  controls: Controls;
  isSignUp: boolean;
}
interface AuthProps {
  onAuth: (email: string, password: string, isSignUp: boolean) => void;
  loading: boolean;
  error: null;
  isAuthenticated: boolean;
  authRedirectPath: string;
  buildingBurger: boolean;
  onSetAuthRedirectPath: () => void;
}
class Auth extends React.Component<AuthProps, AuthState> {
  state = {
    controls: {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Mail Address',
        },
        value: '',
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Password',
        },
        value: '',
        validation: {
          required: true,
          minLength: 6,
        },
        valid: false,
        touched: false,
      },
    },
    isSignUp: true,
  };

  componentDidMount() {
    if (!this.props.buildingBurger && this.props.authRedirectPath !== '/') {
      this.props.onSetAuthRedirectPath();
    }
  }

  inputChangedHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    controlName: string
  ) => {
    const updatedControls = updateObject(this.state.controls, {
      [controlName]: updateObject(
        this.state.controls[controlName as keyof typeof this.state.controls],
        {
          value: event.target.value,
          valid: checkValidity(
            event.target.value,
            this.state.controls[controlName as keyof typeof this.state.controls]
              .validation
          ),
          touched: true,
        }
      ),
    });
    this.setState({ controls: updatedControls });
  };
  submitHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    this.props.onAuth(
      this.state.controls.email.value,
      this.state.controls.password.value,
      this.state.isSignUp
    );
  };

  switchAuthModeHandler = () => {
    this.setState((prevState) => {
      return { isSignUp: !prevState.isSignUp };
    });
  };
  render() {
    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key as keyof typeof this.state.controls],
      });
    }
    let form: JSX.Element | JSX.Element[] = formElementsArray.map(
      (formElement) => (
        <Input
          key={formElement.id}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          invalid={!formElement.config.valid}
          shouldValidate={formElement.config.validation}
          touched={formElement.config.touched}
          changed={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
            this.inputChangedHandler(event, formElement.id)
          }
        />
      )
    );
    if (this.props.loading) {
      form = <Spinner />;
    }
    let errorMessage = null;

    if (this.props.error) {
      errorMessage = <p>{this.props.error['message']}</p>;
    }
    let authRedirect = null;
    if (this.props.isAuthenticated) {
      authRedirect = <Redirect to={this.props.authRedirectPath} />;
    }

    return (
      <div className={classes.Auth}>
        {authRedirect}
        {errorMessage}
        <form onSubmit={this.submitHandler}>
          {form}
          <Button btnType='Success'>SUBMIT</Button>
        </form>
        <Button clicked={this.switchAuthModeHandler} btnType='Danger'>
          Currently:{' '}
          {this.state.isSignUp ? 'Sign In' : 'Logging into the Matrix'}
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state: {
  auth: InitialState3;
  burgerBuilder: InitialState;
}) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
    buildingBurger: state.burgerBuilder.building,
    authRedirectPath: state.auth.authRedirectPath,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<InitialState3, void, ActionType>
) => {
  return {
    onAuth: (email: string, password: string, isSignUp: boolean) =>
      dispatch(actions.auth(email, password, isSignUp)),
    onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/')),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
