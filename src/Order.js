import React, { Component } from 'react';
import axios from 'axios';
import ItemssList from './ItemsList';


class Order extends React.Component{
  constructor(){
    super();
    this.state = {
      customer: {},
      orders: []
    }
  }

  async componentDidUpdate(prevProps){
    if(prevProps.selectedCustomerId !== this.props.selectedCustomerId) {
      const customer = (await axios.get(`/api/customers/${this.props.selectedCustomerId}`)).data;
      const orders = (await axios.get(`/api/customers/${this.props.selectedCustomerId}/orders`)).data;
      const ordersNameList = orders.map((a) => <li key={a.itemId}> {a.item.name} </li>)
      const orderLength = orders.length;

      this.setState({ customer, orderLength, ordersNameList })
    } 
  }
  
  async componentDidMount() {
    const customer = (await axios.get(`/api/customers/${this.props.selectedCustomerId}`)).data;
    const orders = (await axios.get(`/api/customers/${this.props.selectedCustomerId}/orders`)).data;
    const ordersNameList = orders.map((a) => <li key={a.itemId}> {a.item.name} </li>)
    const orderLength = orders.length;
  
    this.setState({ customer, orders, orderLength, ordersNameList })
  }

  render(){
    const { customer, orderLength, orders, ordersNameList } = this.state
    return (   
    <div>
       <h3> { customer.name }'s Orders ({ orderLength }) </h3>
       <div className="orderDetails">
         { ordersNameList } 
       </div>
    </div>
    )
  }
}


export default Order;
