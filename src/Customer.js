import React from 'react';
import App from './App';


  const selectedCustomerId = window.location.hash.slice(1)


const Customer = (props) => {
    const name = props.customer.name
    const id = props.customer.id
    const selectedCustomerId = window.location.hash.slice(1)

    return (
        <div className= { id === selectedCustomerId ? 'selected' : ''}>
            <a href={`#${id}`} >
                { name }
            </a>
        </div>
        )
    }     
  export default Customer;