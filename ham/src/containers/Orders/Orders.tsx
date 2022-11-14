import React from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../HOC/withErrorHandler/withErrorHandler';

interface OrdersState {
  orders: string[] | number[];
  loading: boolean;
}
interface OrdersProps {}
class Orders extends React.Component<OrdersProps, OrdersState> {
  state = {
    orders: [],
    loading: true,
  };
  componentDidMount() {
    axios
      .get('/orders.json')
      .then((res) => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({ ...res.data[key], id: key });
        }
        this.setState({ loading: false, orders: fetchedOrders });
      })
      .catch(() => {
        console.log('Error has happened');
        this.setState({ loading: false });
      });
  }
  render() {
    return (
      <div>
        {this.state.orders.map((order) => (
          <Order
            key={order['id']}
            ingredients={order['ingredients']}
            price={order['price']}
          />
        ))}
      </div>
    );
  }
}
export default withErrorHandler(Orders, axios);
