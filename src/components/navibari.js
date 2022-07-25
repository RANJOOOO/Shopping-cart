import React, { Component } from 'react';

class Navbar extends Component 
{
    state = {  } 
    render() { 
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark row">
            <div className="container-fluid">
              <a className="navbar-brand col-1 mx-5" href="#">Happy Shopping</a>
              <a href="#" className='navbar-brand col-11 mx-5'>{"Items in Cart : "}{this.props.tquantity}</a>
            </div>
          </nav>
        );
    }
}
 
export default  Navbar;


// {"Items in Cart : "}{this.props.tquantity}