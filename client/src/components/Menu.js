import React from 'react';
import imgDrink from '../images/drinks.png';
import mainDish from '../images/dishes.png';
import desserts from '../images/desserts.png';
import special from '../images/special.png';

const Menu = (props)=>{
  const imgs =[imgDrink, mainDish, desserts,special];
  const categories = props.categories.map((cat,i)=>{
    return (
        <div
            onClick={()=>props.switchCat(i)}
            className={props.active===i ? "category active" : "category"}
            key={cat}>
          <img src={imgs[i]} alt=""/>
          <h3>{cat}</h3>
        </div>
    )
  });

  const items = props.menu && props.menu.map((item,i)=>{
    return (
        <li onClick={()=>props.addOrder(item)}
            key={i}>
          {item.name}
          <span>{item.price}€</span>
        </li>
    )
  });

  return (
      <div className="menu">
        <div className="categories">
          {categories}
        </div>
        <ul className="menu-items">
          {items}
        </ul>
        {props.menu? null : <div className="loader"/>}
      </div>
  );
};

export default Menu