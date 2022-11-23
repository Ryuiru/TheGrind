import React from 'react';
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
import { InitialState2 } from '../../../store/reducers/order';
import { InitialState3 } from '../../../store/reducers/auth';
interface ContactDataProps {
  ingredients: {};
  price: string | number;
  ings: {};
  onOrderBurger: ({}, Token: string) => void;
  loading: boolean;
  token: string;
  userId: string;
}
interface ContactDataState {
  orderForm: OrderForm;
  formIsValid?: boolean;
  loading?: boolean;
}

interface OrderForm {
  name: SomeValues;
  street: SomeValues;
  zipCode: SomeValues;
  country: SomeValues;
  email: SomeValues;
  devileryMethod: DevileryMethod;
  [key: string]: SomeValues | DevileryMethod;
}
export interface DevileryMethod {
  elementType: string;
  elementConfig: {
    options: [
      { value: string; displayValue: string },
      { value: string; displayValue: string }
    ];
  };
  value: string;
  validation: {};
  valid: boolean;
  touched?: boolean;
}
export interface SomeValues {
  elementType: string;
  elementConfig: {
    type: string;
    placeholder: string;
  };
  value: string;
  validation: {
    required: boolean;
    minLength?: number;
    maxLength?: number;
  };
  valid: boolean;
  touched: boolean;
}
class ContactData extends React.Component<ContactDataProps, ContactDataState> {
  state: ContactDataState = {
    orderForm: {
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
        validation: { required: true, minLength: 5, maxLength: 5 },
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
        validation: { required: true },
        valid: false,
        touched: false,
      },
      devileryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'fastest', displayValue: 'Fastest' },
            { value: 'cheapest', displayValue: 'Cheapest ' },
          ],
        },
        value: 'fastest',
        validation: {},
        valid: true,
      },
    },
    formIsValid: false,
  };
  orderHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    this.setState({ loading: true });
    const formData = {
      name: {},
      street: {},
      zipCode: {},
      country: {},
      email: {},
      devileryMethod: {},
    };
    // const formData = {};
    for (let formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier as keyof typeof formData] =
        this.state.orderForm[formElementIdentifier].value;
    }
    const order = {
      ingredients: this.props.ings,
      price: this.props.price,
      orderData: formData,
      userId: this.props.userId,
    };
    this.props.onOrderBurger(order, this.props.token);
  };
  checkValidity(
    value: string,
    rules: {
      required?: boolean;
      minLength?: number;
      maxLength?: number;
    }
  ) {
    let isValid = true;
    if (!rules) {
      return true;
    }
    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    return isValid;
  }
  inputChangedHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    inputIdentifier: string
  ) => {
    const updatedOrderForm = { ...this.state.orderForm };
    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier],
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedOrderForm[inputIdentifier] = updatedFormElement;
    let formIsValid: boolean = true;
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }

    this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
  };
  render() {
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }
    let form = (
      <form onSubmit={this.orderHandler}>
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
              this.inputChangedHandler(event, formElement.id)
            }
          />
        ))}
        <Button btnType='Success' disabled={!this.state.formIsValid}>
          ORDER
        </Button>
      </form>
    );
    if (this.props.loading) {
      form = <Spinner />;
    }
    return (
      <div className='ContactData'>
        <h4>Enter Your Contact Data</h4>
        {form}
      </div>
    );
  }
}

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
// onOrderBurger
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(ContactData, axios));
