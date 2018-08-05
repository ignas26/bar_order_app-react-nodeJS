import React from 'react';

const Header = (props) => {
  const tabs = props.tabs.map((tab, i) => {
    return (
        <li
            className={props.active===i? "active":null}
            onClick={()=>props.switchTab(i)}
            key={tab}>
          {tab}
        </li>
    )
  });

  return (
      <header>
        <h2>Menu</h2>
        <nav>
          <h1>Bar <span>Order</span></h1>
          <ul>
            {tabs}
          </ul>
        </nav>
      </header>
  );
};
export default Header