import React from 'react';
import axios from 'axios'
import CustomersList from './CustomersList'
import Nav from './Nav'
import Footer from './Footer'
import ItemsList from './ItemsList'
import Orders from './Orders'


export default class App extends React.Component {
  constructor () {
    super();
    this.state = {
      customers: [],
      items: [],
      loading: true
    }
  }

  async componentDidMount () {
   // const { data } = await axios.get('/api/customers')
    this.setState({
      customers: (await axios.get('/api/customers')).data,
      items: (await axios.get('/api/items')).data,
      loading: false
    }) 
  }
  
  render () {
    const { customers, loading, items } = this.state;
    console.log(customers);
    if(loading){
      return '...loading';
    }
    return (
      <div id="main">  
        <Nav />
        <div id="inner">
         <CustomersList customers={this.state.customers} />
        <ItemsList items={this.state.items} />
        <Orders />
         
        </div>
        <Footer />
      </div>
    );
  }
}


