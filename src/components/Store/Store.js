import React, { Component } from 'react';
import ProductCard from './ProductCard';
import yellowbhut from './media/yellowbhut.png';
import chocolate from './media/chocolate.png';
import ghost from './media/ghost.png';
import scorpion from './media/scorpion.png';

class Store extends Component {
  constructor() {
    super();
    this.state = {
      peppers: [
        {
          type: 'Chocolate Habanero',
          img: chocolate,
          price: '$12',
          desc:
            'The chocolate habanero has an exotic and unusual taste, and is hotter than a regular habanero with a rating between 425,000 and 577,000 Scoville units. Small slivers used in cooking can have a dramatic effect on the overall dish.',
        },
        {
          type: 'Yellow Bhut',
          img: yellowbhut,
          price: '$10',
          desc: 'Yellow ghost pepper',
        },
        {
          type: 'Ghost Pepper',
          img: ghost,
          price: '$9',
          desc: 'Very spicy!',
        },
        {
          type: 'Scorpion Pepper',
          img: scorpion,
          price: '$15',
          desc: 'From trinidad!',
        },
      ],
    };
  }
  render(props) {
    let productCards = this.state.peppers.map((pepper) => {
      return (
        <div>
          <ProductCard pepper={pepper} />
        </div>
      );
    });
    return (
      <div className='bg-light-green'>
        <div className='flex flex-wrap pa5 '>{productCards}</div>
      </div>
    );
  }
}

export default Store;
