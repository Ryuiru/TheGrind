import React from 'react';
import './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

import Button from '../../../components/UI/Button/Button';
// import withErrorHandler from '../../../HOC/withErrorHandler/withErrorHandler';
import { RouteComponentProps } from 'react-router-dom';
interface ContactDataProps extends RouteComponentProps {
  ingredients: {};
  price: string | number;
}
class ContactData extends React.Component<ContactDataProps> {
  state = {
    name: '',
    email: '',
    adress: {
      street: '',
      postalCode: ' ',
    },
    loading: false,
    price: 0,
  };
  orderHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Gediminas Gedvilas',
        address: {
          street: 'asdfasdf',
          zipCode: '66666',
          country: 'Lithuania',
        },
        email: 'testing@testing.com',
      },
      devileryMethod: 'fastest',
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

  render() {
    let form = (
      <form action=''>
        <input
          className='Input'
          type='text'
          name='name'
          placeholder='Your name'
        />
        <input
          className='Input'
          type='email'
          name='email'
          placeholder='Your email'
        />
        <input
          className='Input'
          type='text'
          name='street'
          placeholder='Street'
        />
        <input
          className='Input'
          type='text'
          name='postal'
          placeholder='Postal Cpde'
        />
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
