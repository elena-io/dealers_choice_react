import React from 'react';


const ItemssList = (props) => {
    const items = props.items;

    return (
        <div>
            <h3> Items </h3>
            <ul>
                {
                items.map(item => {
                    return (
                        <li key={ item.id }>
                            { item.name }
                        </li>
                    )
                } )
                }

            </ul>
            
        </div>
        )
    }     
  export default ItemssList;