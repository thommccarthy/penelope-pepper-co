import React, { Component } from 'react';
import ProductCard from './ProductCard';
import yellowbhut from './media/yellowbhut.png';
import chocolate from './media/chocolate.png';
import ghost from './media/ghost.png';
import scorpion from './media/scorpion.png';
import yellowreaper from './media/yellowreaper.png';
import habanero from './media/habanero.png';

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
            'The chocolate habanero has an exotic and unusual taste, and is hotter than a regular habanero with a top rating of 577,000 Scoville units. Small slivers used in cooking can have a dramatic effect on the overall dish.',
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
        {
          type: 'Yellow Reaper',
          img: yellowreaper,
          price: '$20',
          desc: 'Yellow Carolina Reaper',
        },
        {
          type: 'Habanero',
          img: habanero,
          price: '$7',
          desc: 'Classic',
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
        <div className='tc pt3 f2 georgia dark-red'></div>
        <div className='flex flex-wrap pa3'>{productCards}</div>
      </div>
    );
  }
}

export default Store;
