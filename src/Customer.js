import React from 'react';


const Customer = (props) => {
    const name = props.customer.name

    return (
        <div className="customer">
            <a>
                <p>{ name }</p>
            </a>
        </div>
        )
    }     
  export default Customer;