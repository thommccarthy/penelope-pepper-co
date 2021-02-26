import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../Home/ProductCard';

class Store extends Component {
  render() {
    return (
      <div className='bg-light-green'>
        <div className='flex justify-between flex-wrap pa2 ma3'>
          <div>
            <ProductCard />
          </div>
          <div>
            <ProductCard />
          </div>
          <div>
            <ProductCard />
          </div>
          <div>
            <ProductCard />
          </div>
          <div>
            <ProductCard />
          </div>
          <div>
            <ProductCard />
          </div>
          <div>
            <ProductCard />
          </div>
          <div>
            <ProductCard />
          </div>
        </div>
      </div>
    );
  }
}

export default Store;
