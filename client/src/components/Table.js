import React from 'react';

const Table = ({i, active,name,switchTable, orders,removeOrder,checkout})=>{
  const tableOrders = orders.filter(order=>{
    return order.table===i
  }).map((order,index)=>{
  return (
      <li className="item" key={index}>
        {order.name}
        <span
            onClick={()=>removeOrder(order.id)}
            className="delete">x</span>
        <span className="price">{order.price}</span>
      </li>
  )
  });

  return (
      <div
          onClick={()=>switchTable(i)}
          className={i===active? "table active-table": "table"}>
        <h4>{name}</h4>
        <ul>
          {tableOrders}
        </ul>
        <nav>
          <div
              onClick={()=>checkout(i)}
              className="btn">checkout</div>
          <h5>Total:</h5>
        </nav>
      </div>
  );
};
export default Table