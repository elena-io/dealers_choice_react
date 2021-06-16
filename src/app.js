import React from 'react';
import axios from 'axios'
import CustomersList from './CustomersList'
import Customer from './Customer'
import Nav from './Nav'
import Footer from './Footer'


export default class App extends React.Component {
  constructor () {
    super();
    this.state = {
      customers: [],
      loading: true
    }
  }

  async componentDidMount () {
   // const { data } = await axios.get('/api/customers')
    this.setState({
      customers: (await axios.get('/api/customers')).data,
      loading: false
    }) 
  }
  
  render () {
    const { customers, loading } = this.state;
    console.log(customers);
    if(loading){
      return '...loading';
    }
    return (
      <div id="main">  
        <Nav />
        <div id="inner">
         <CustomersList customers={this.state.customers} />
         
        </div>
        <Footer />
      </div>
    );
  }
}


