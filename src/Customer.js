import React from 'react';


const Customer = (props) => {
    const name = props.customer.name

    return (
        <div className="customer">
            <a>
                { name }
            </a>
        </div>
        )
    }     
  export default Customer;