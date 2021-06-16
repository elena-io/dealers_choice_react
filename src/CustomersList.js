import React from 'react';
import Customer from './Customer'


const CustomersList = (props) => {
    const customers = props.customers;

    return (
        <div className="customers">
            {
                customers.map(customer => <Customer customer={customer} key={customer.id}/>)
            }
        </div>
        )
    }     
  export default CustomersList;