import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const Statistics = ({completed})=>{


  const total = completed.reduce((total,a)=>total+a.price, 0);

 var arr=[];
 arr=[...completed].map(item=>{
    return item.price
  });
  console.log(arr);

  return (
      <div className="stats">

        <h1>Total: {total.toFixed(2)}</h1>
        <div className="sparklines">
          <Sparklines data={arr}>
            <SparklinesLine color="green" />
          </Sparklines>
        </div>
      </div>
  );
};
export default Statistics