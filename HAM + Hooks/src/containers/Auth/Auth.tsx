import React, { useState, useEffect } from 'react';
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

interface AuthProps {
  onAuth: (email: string, password: string, isSignUp: boolean) => void;
  loading?: boolean;
  error?: null;
  isAuthenticated: boolean;
  authRedirectPath: string;
  buildingBurger: boolean;
  onSetAuthRedirectPath: () => void;
}
const Auth: React.FunctionComponent<AuthProps> = (props) => {
  const [authForm, setAuthForm] = useState({
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
  });

  const [isSignup, setIsSignup] = useState(true);

  const { buildingBurger, authRedirectPath, onSetAuthRedirectPath } = props;

  useEffect(() => {
    if (!buildingBurger && authRedirectPath !== '/') {
      onSetAuthRedirectPath();
    }
  }, [buildingBurger, authRedirectPath, onSetAuthRedirectPath]);

  const inputChangedHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    controlName: string
  ) => {
    const updatedControls = updateObject(authForm, {
      [controlName]: updateObject(
        authForm[controlName as keyof typeof authForm],
        {
          value: event.target.value,
          valid: checkValidity(
            event.target.value,
            authForm[controlName as keyof typeof authForm].validation
          ),
          touched: true,
        }
      ),
    });
    setAuthForm(Object(updatedControls));
  };
  const submitHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    props.onAuth(authForm.email.value, authForm.password.value, isSignup);
  };

  const switchAuthModeHandler = () => {
    setIsSignup(!isSignup);
  };

  const formElementsArray = [];
  for (let key in authForm) {
    formElementsArray.push({
      id: key,
      config: authForm[key as keyof typeof authForm],
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
          inputChangedHandler(event, formElement.id)
        }
      />
    )
  );
  if (props.loading) {
    form = <Spinner />;
  }
  let errorMessage = null;

  if (props.error) {
    errorMessage = <p>{props.error['message']}</p>;
  }
  let authRedirect = null;
  if (props.isAuthenticated) {
    authRedirect = <Redirect to={props.authRedirectPath} />;
  }

  return (
    <div className={classes.Auth}>
      {authRedirect}
      {errorMessage}
      <form onSubmit={submitHandler}>
        {form}
        <Button btnType='Success'>SUBMIT</Button>
      </form>
      <Button clicked={switchAuthModeHandler} btnType='Danger'>
        Currently: {isSignup ? 'Sign In' : 'Logging into the Matrix'}
      </Button>
    </div>
  );
};

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
  console.log('asd');
  return {
    onAuth: (email: string, password: string, isSignUp: boolean) =>
      dispatch(actions.auth(email, password, isSignUp)),
    onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/')),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
