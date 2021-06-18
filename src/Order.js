import React, { Component } from 'react';
import axios from 'axios';


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
      this.setState({ customer })
    }
   
    
  }
  async componentDidMount() {
    const customer = (await axios.get(`/api/customers/${this.props.selectedCustomerId}`)).data;
    const orders = (await axios.get(`/api/customers/${this.props.selectedCustomerId}/orders`)).data;
    


    this.setState({ customer, orders })
  }

  render(){
    const { customer, orders } = this.state
    return (
     
    <div>
       <h3> Orders ({ orders.length }) </h3>
       <div className="orderDetails">
         
         <p> Order has been created: {} </p>
         { customer.name }

       </div>
    
    </div>
    )

  }
}


// const Order = () => {
//   return (
//     <div>
//         <h3> Orders </h3>
//     </div>
//   )
// };

export default Order;
