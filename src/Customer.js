import React from 'react';
import App from './App';


const Customer = (props) => {
    const name = props.customer.name
    const id = props.customer.id

    return (
        <div>
            <a href={`#${id}`} >
                { name }
            </a>
        </div>
        )
    }     
  export default Customer;