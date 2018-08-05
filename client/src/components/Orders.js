import React from 'react';
import Table from './Table';

const Orders = (props)=>{
  const tables = props.tables.map((table,i)=>{
    return (
        <Table
            checkout={props.checkout}
            removeOrder={props.removeOrder}
            orders={props.orders}
            i={i}
            switchTable={props.switchTable}
            active={props.activeTable}
            name={table}
            key={i}/>
    )
  });

  return (
      <div className="orders">
        {tables}
      </div>
  );
};
export default Orders