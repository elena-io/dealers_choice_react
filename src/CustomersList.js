import React from 'react';
import Customer from './Customer'


const CustomersList = (props) => {
    const customers = props.customers;

    return (
        <div>
            <h3> Customers </h3>
            {
                customers.map(customer => <Customer customer={customer} key={customer.id}/>)
            }
        </div>
        )
    }     
  export default CustomersList;