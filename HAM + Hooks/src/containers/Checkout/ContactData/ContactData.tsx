import React, { useState } from 'react';
import './ContactData.css';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Button from '../../../components/UI/Button/Button';
import withErrorHandler from '../../../HOC/withErrorHandler/withErrorHandler';
import Input from '../../../components/UI/Input/Input';
import * as actions from './../../../store/actions/index';
import {
  ActionType,
  InitialState,
} from '../../../store/reducers/burgerBuilder';
import { updateObject, checkValidity } from '../../../shared/utility';
import { InitialState2 } from '../../../store/reducers/order';
import { InitialState3 } from '../../../store/reducers/auth';
import { RouteComponentProps } from 'react-router-dom';
export interface ContactDataProps extends RouteComponentProps {
  ingredients: {};
  price: string | number;
  ings: {};
  onOrderBurger: (order: {}, Token: string) => void;
  loading: boolean;
  token: string;
  userId: string;
}

const ContactData: React.FunctionComponent<ContactDataProps> = (props) => {
  const [orderForm, setOrderForm] = useState({
    name: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Your Name',
      },
      value: '',
      validation: { required: true },
      valid: false,
      touched: false,
    },
    street: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Street',
      },
      value: '',
      validation: { required: true },
      valid: false,
      touched: false,
    },
    zipCode: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'ZIP Code ',
      },
      value: '',
      validation: {
        required: true,
        minLength: 5,
        maxLength: 5,
        isNumeric: true,
      },
      valid: false,
      touched: false,
    },
    country: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Your Country',
      },
      value: '',
      validation: { required: true },
      valid: false,
      touched: false,
    },
    email: {
      elementType: 'input',
      elementConfig: {
        type: 'email',
        placeholder: 'Your Email',
      },
      value: '',
      validation: { required: true, isEmail: true },
      valid: false,
      touched: false,
    },
    devileryMethod: {
      elementType: 'select',
      elementConfig: {
        options: [
          { value: 'fastest', displayValue: 'Fastest' },
          { value: 'cheapest', displayValue: 'Cheapest' },
        ],
      },
      value: 'fastest',
      validation: {},
      valid: true,
      touched: null,
    },
  });

  const [formIsValid, setFormIsValid] = useState(false);

  const orderHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // useState({ loading: true });
    const formData = {
      name: {},
      street: {},
      zipCode: {},
      country: {},
      email: {},
      devileryMethod: {},
    };
    for (let formElementIdentifier in orderForm) {
      formData[formElementIdentifier as keyof typeof formData] =
        orderForm[formElementIdentifier as keyof typeof orderForm].value;
    }
    const order = {
      ingredients: props.ings,
      price: props.price,
      orderData: formData,
      userId: props.userId,
    };
    props.onOrderBurger(order, props.token);
  };
  const inputChangedHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    inputIdentifier: number | string
  ) => {
    const updatedFormElement = updateObject(
      orderForm[inputIdentifier as keyof typeof inputIdentifier],
      {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          orderForm[inputIdentifier as keyof typeof orderForm].validation
        ),
        touched: true,
      }
    );
    const updatedOrderForm = updateObject(orderForm, {
      [inputIdentifier]: updatedFormElement,
    });
    let formIsValid: boolean = true;
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid =
        updatedOrderForm[inputIdentifier as keyof typeof updatedOrderForm][
          'valid'
        ] && formIsValid;
    }
    setOrderForm(Object(updatedOrderForm));
    setFormIsValid(formIsValid);
  };
  const formElementsArray = [];
  for (let key in orderForm) {
    formElementsArray.push({
      id: key,
      config: orderForm[key as keyof typeof orderForm],
    });
  }
  let form = (
    <form onSubmit={orderHandler}>
      {formElementsArray.map((formElement) => (
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
      ))}
      <Button btnType='Success' disabled={!formIsValid}>
        ORDER
      </Button>
    </form>
  );
  if (props.loading) {
    form = <Spinner />;
  }
  return (
    <div className='ContactData'>
      <h4>Enter Your Contact Data</h4>
      {form}
    </div>
  );
};

const mapStateToProps = (state: {
  burgerBuilder: InitialState;
  order: InitialState2;
  auth: InitialState3;
}) => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<InitialState2, void, ActionType>
) => {
  return {
    onOrderBurger: (orderData: string, token: string) =>
      dispatch(actions.purchaseBurger(orderData, token)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(ContactData, axios));
