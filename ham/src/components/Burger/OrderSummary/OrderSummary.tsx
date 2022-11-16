import React, { MouseEventHandler } from 'react';
import Auxiliary from '../../../HOC/Auxiliary';
import Button from '../../UI/Button/Button';
// import './../../UI/Button/Button.css';
interface Props {
  ingredients: {
    [Key: string]: number;
  };
  price: number;
  purchaseCancelled: MouseEventHandler | undefined;
  purchaseContinued: MouseEventHandler | undefined;
}

class OrderSummary extends React.Component<Props> {
  componentDidUpdate() {
    console.log('[OrderSummary] Updated');
  }
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: 'capitalize' }}>{igKey}</span> :{' '}
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );
    return (
      <Auxiliary>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType='Danger' clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType='Success' clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </Auxiliary>
    );
  }
}
export default OrderSummary;

// const OrderSummary: React.FC<Props> = (props) => {
//   const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
//     return (
//       <li key={igKey}>
//         <span style={{ textTransform: 'capitalize' }}>{igKey}</span> :{' '}
//         {props.ingredients[igKey]}
//       </li>
//     );
//   });
//   return (
//     <Auxiliary>
//       <h3>Your Order</h3>
//       <p>A delicious burger with the following ingredients:</p>
//       <ul>{ingredientSummary}</ul>
//       <p>
//         <strong>Total Price: {props.price.toFixed(2)}</strong>
//       </p>
//       <p>Continue to Checkout?</p>
//       <Button clicked={props.purchaseCancelled}>CANCEL</Button>
//       <Button clicked={props.purchaseContinued}>CONTINUE</Button>
//     </Auxiliary>
//   );
// };
// export default OrderSummary;
