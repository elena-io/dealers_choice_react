import React from 'react';
import axios from 'axios'
import CustomersList from './CustomersList'
import Customer from './Customer'
import Nav from './Nav'
import Footer from './Footer'
import ItemsList from './ItemsList'
import Order from './Order'


export default class App extends React.Component {
  constructor () {
    super();
    this.state = {
      customers: [],
      selectedUserId: '',
      items: [],
      orders: []
    }
  }

  async componentDidMount () {
   // const { data } = await axios.get('/api/customers')
   const customers = (await axios.get('/api/customers')).data;
   const items = (await axios.get('/api/items')).data;
   
  
   this.setState({
      customers,
      items,
  
    }); 
   window.addEventListener('hashchange', ()=> {
     this.setState({ selectedCustomerId: window.location.hash.slice(1)})
   })
   this.setState({ selectedCustomerId: window.location.hash.slice(1)})
  }
  
  render () {
    const { customers, loading, selectedCustomerId } = this.state;
    if(loading){
      return '...loading';
    }
    return (
      <div id="main">  
        <Nav />
        <div id="inner">
         <CustomersList customers={this.state.customers} />
        <ItemsList items={this.state.items} />
         <div>
           { !!selectedCustomerId && <Order selectedCustomerId={ selectedCustomerId } />  }
         </div>
        </div>
        <Footer />
      </div>
    );
  }
}


