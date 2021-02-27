import React, { Component } from 'react';
import yellowbhut from './media/yellowbhut.png';
import chocolate from './media/chocolate.png';
import ghost from './media/ghost.png';
import scorpion from './media/scorpion.png';
import Store from './Store';

export class ProductCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='storeCard'>
        <h1>
          <article className='br2 ba dark-gray b--black-10 mv4  mw5 center shadow-3 grow'>
            <img
              src={this.props.pepper.img}
              className='choc db br2 br--top center'
              alt='pepper'
            />
            <div className='pa2 ph3-ns pb3-ns'>
              <div className='dt w-100 mt1'>
                <div className='dtc'>
                  <h1 className='f5 f4-ns mv0'>{this.props.pepper.type}</h1>
                </div>
                <div className='dtc tr'>
                  <h2 className='f5 mv0'>{this.props.pepper.price}</h2>
                </div>
              </div>
              <p className='f6 lh-copy measure mt2 mid-gray'>
                {this.props.pepper.desc}
              </p>
            </div>
          </article>
        </h1>
      </div>
    );
  }
}

export default ProductCard;
