import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Header from '../header/header';
import Welcome from '../home/welcome-card/welcome';
import ProductCard from '../home/product-card/product';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products : []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:3000/get-all-products')
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(`${error}`)
      })
  }

  render(){
    return (
      <div className="app">
        <Header></Header>
        <div className = "body">
          <div className = "container-fluid">
            <div className = "row">
              <div className = "col-md-12">
                <Welcome></Welcome>
              </div>
            </div>
            <div className = "row product">
              <div className = "col-md-3">
                <ProductCard></ProductCard>
              </div>
              <div className = "col-md-3">
                <ProductCard></ProductCard>
              </div>
              <div className = "col-md-3">
                <ProductCard></ProductCard>
              </div>
            </div>
  
            <div className = "row product">
              <div className = "col-md-4">
                <ProductCard></ProductCard>
              </div>
              <div className = "col-md-4">
                <ProductCard></ProductCard>
              </div>
              <div className = "col-md-4">
                <ProductCard></ProductCard>
              </div>
            </div>
          </div>
        </div>
  
      </div>
    );
  }
}
//export default App;

export default connect()(App);
