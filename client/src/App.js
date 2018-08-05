import React, { Component } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Settings from './components/Settings';
import Statistics from './components/Statistics';
import Orders from './components/Orders';
import axios from 'axios';
import _ from 'lodash';

class App extends Component {
  state={
    tabs:['Orders', 'Statistics', 'Settings'],
    categories:['drinks', 'dishes', 'deserts', 'special'],
    activeTab:0,
    activeCat:0,
    menu:{},
    tables:['Table 1', 'Table 2', 'Table 3', 'Table 4'],
    activeTable:0,
    orders:[],
    completed:[]
  };


  addSpecial = (menuItem)=>{
    const special=[...this.state.menu.special, menuItem];
    const menu={...this.state.menu, special};
    //localStorage.setItem('special', JSON.stringify(menu.special));
    this.setState({menu})
  };

  removeSpecial = (idx) =>{
    const newSpecial = this.state.menu.special.filter((item,i)=>{
      return i!==idx
    });
    const newMenu ={...this.state.menu,special:newSpecial};
    this.setState({menu:newMenu})
  };

  checkout =(i)=>{
    console.log(i);
    const completed=[...this.state.completed];
    const orders = this.state.orders.filter(order=>{
      if(order.table===i) completed.push(order);
      return order.table!==i
    });
    this.setState({orders, completed})
  };

  addOrder=(order)=>{
    const orders =
        [...this.state.orders,
          {...order,table:this.state.activeTable, id:_.uniqueId()}];
    this.setState({orders})
  };

  removeOrder = (id)=>{
    this.setState({orders:this.state.orders.filter((o)=>o.id!==id)})
  };


  switchTab = (i)=>{
    this.setState({activeTab:i})
  };

  switchCat = activeCat => this.setState({activeCat});

  switchTable = (i)=>{
    this.setState({activeTable:i})
  };

  componentDidMount(){
    const URL = 'https://enigmatic-cliffs-25405.herokuapp.com/menu';
    axios.get(URL).then((res)=>{
      console.log(res);
      this.setState({menu:res.data.menu});
      console.log(this.state.menu);
    });
  }

  render() {
      const content =[
        <Orders
            checkout={this.checkout}
            removeOrder={this.removeOrder}
            orders={this.state.orders}
            switchTable={this.switchTable}
            activeTable={this.state.activeTable}
            tables={this.state.tables}/>,
        <Statistics completed={this.state.completed}/>,
        <Settings addSpecial={this.addSpecial} removeSpecial={this.removeSpecial} special={this.state.menu.special}/>
      ];

    return (
        <div>
          <Header
              active={this.state.activeTab}
              switchTab={this.switchTab}
              tabs={this.state.tabs}/>
          <Menu
              addOrder={this.addOrder}
              menu={this.state.menu[this.state.categories[this.state.activeCat]]}
              switchCat={this.switchCat}
              active={this.state.activeCat}
              categories={this.state.categories}/>
          {content[this.state.activeTab]}
        </div>
    );
  }
}

export default App;