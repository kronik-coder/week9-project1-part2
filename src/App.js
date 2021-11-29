import React, { Component } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './views/Home'
import Cart from './views/Cart'
import Login from './views/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import axios from 'axios';

export default class App extends Component {
  constructor(){
    super()
    this.state={
      items: [],
      token: '',
      myItems: []
    }
  }

  componentDidMount(){
    axios.get('https://fakestoreapi.com/products?limit=15')
    .then(({data})=>{
      this.setState({items: data})
    })
  }

  addToCart = (myItem)=>{
    let myItems = this.state.myItems
    myItems.push(myItem)
    this.setState(myItems)
    console.log(myItems)
  }

  deleteFromCart = (index)=>{
    const myItems = Object.assign([], this.state.myItems)
    myItems.splice(index, 1);
    this.setState({myItems:myItems})
  }

  clearCart = ()=>{
    this.setState({myItems: []})
  }
  getTotal = ()=>{
    let total = 0
    let cart = this.state.myItems
    for(let i of cart){
      total += parseFloat(i.price)
    }
    return total
  }

  render() {
    return (
      <div>
        <NavBar items={this.state.items} token={this.state.token}/>
        <Routes>
          <Route path='/' element={<Home items={this.state.items} addToCart={this.addToCart}/>} />
          <Route path='/cart' element={<Cart myItems={this.state.myItems} 
                                              deleteFromCart={this.deleteFromCart} 
                                              clearCart={this.clearCart}
                                              getTotal={this.getTotal} />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    )
  }
}

