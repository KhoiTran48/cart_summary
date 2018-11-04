import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';

const menus=[
  {
    name:'Trang Chủ',
    path:'/',
    exact:true
  },
  {
    name:'Sản Phẩm',
    path:'/product-list',
    exact:false
  }
]

const MenuLink=({label, to, activeOnlyWhenExact})=>{
     return (
         <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({match})=>{
                var active=match ? 'active' : '';
                return(
                    <li className={active}>
                        <Link to={to}>
                            {label}
                        </Link>
                    </li>
                );
            }}
         />
     )
}

class Menu extends Component {
  render() {
    return (
        <div className="navbar">
          <a className="navbar-brand" href="#">Call API</a>
          <ul className="nav navbar-nav">
            {this.showMenus(menus)}
          </ul>
        </div>
    );
  }
  showMenus=(menus)=>{
      var result=null;
      result=menus.map((item, index)=>{
          return <MenuLink
                    key={index}
                    label={item.name}
                    to={item.path}
                    activeOnlyWhenExact={item.exact}
                >

          </MenuLink>
      })
      return result;
  }
}

export default Menu;
