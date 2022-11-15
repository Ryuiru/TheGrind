import React from 'react';
import './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Button from '../../../components/UI/Button/Button';
// import withErrorHandler from '../../../HOC/withErrorHandler/withErrorHandler';
import Input from '../../../components/UI/Input/Input';
import { RouteComponentProps } from 'react-router-dom';
interface ContactDataProps extends RouteComponentProps {
  ingredients: {};
  price: string | number;
}
interface ContactDataState {
  orderForm: {
    name: SomeValues;
    street: SomeValues;
    zipCode: SomeValues;
    country: SomeValues;
    email: SomeValues;
    devileryMethod: DevileryMethod;
  };
  loading: boolean;
}
export interface DevileryMethod {
  elementType: string;
  elementConfig: {
    options?: [
      { value: string; displayValue: string },
      { value: string; displayValue: string }
    ];
  };
  value: string;
}
export interface SomeValues {
  elementType: string;
  elementConfig: {
    type?: string;
    placeholder?: string;
  };
  value: string;
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
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street',
        },
        value: '',
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'ZIP Code ',
        },
        value: '',
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Country',
        },
        value: '',
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your Email',
        },
        value: '',
      },
      devileryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'fastest', displayValue: 'Fastest' },
            { value: 'cheapest', displayValue: 'Cheapest ' },
          ],
        },
        value: '',
      },
    },
    loading: false,
  };
  orderHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
    };
    axios
      .post('/orders.json', order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };
  inputChangedHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    inputIdentifier: string
  ) => {
    const updatedOrderForm = { ...this.state.orderForm };
    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier as keyof typeof updatedOrderForm],
    };
    updatedFormElement.value = event.target.value;
    updatedOrderForm[inputIdentifier as keyof typeof updatedOrderForm] =
      updatedFormElement;
    this.setState({ orderForm: updatedOrderForm });
  };
  render() {
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key as keyof typeof this.state.orderForm],
      });
    }
    let form = (
      <form>
        {formElementsArray.map((formElement) => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            changed={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
              this.inputChangedHandler(event, formElement.id)
            }
          />
        ))}
        <Button clicked={this.orderHandler}>ORDER</Button>
      </form>
    );
    if (this.state.loading) {
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
export default ContactData;
