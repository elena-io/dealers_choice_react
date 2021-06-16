import React from 'react';
import axios from 'axios'
// import CustomersList from './CustomersList'
// import Customer from './Customer'
import Nav from './Nav'
import Footer from './Footer'


export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      customers: []
    }
  }

  async componentDidMount () {
    const { data } = await axios.get('/api/customers')
    this.setState({
      customers: data
    }) 
  }
  
  render () {
    const customers = this.state;
    console.log(customers);
    return (
      <div id="main">
        <Nav />
        <Footer />
        <div>
         
        </div>
        {/* <CustomersList /> */}
        {/* <ul>
        {
            customers.map(customer => {
              <li key={ customer.id}>
                { customer.name }
              </li>
            })

          }

        </ul>   */}
      </div>
    );
  }
}


