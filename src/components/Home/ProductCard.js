import React, { Component } from 'react';

export class ProductCard extends Component {
  render() {
    return (
      <div className='storeCard'>
        <h1>
          <article className='br2 ba dark-gray b--black-10 mv4  mw5 center shadow-3 grow'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Chocolate_habanero.png/800px-Chocolate_habanero.png'
              className='choc db br2 br--top center'
              alt='Photo of a chocolate habanero.'
            />
            <div className='pa2 ph3-ns pb3-ns'>
              <div className='dt w-100 mt1'>
                <div className='dtc'>
                  <h1 class='f5 f4-ns mv0'>Chocolate Habanero</h1>
                </div>
                <div className='dtc tr'>
                  <h2 className='f5 mv0'>$12</h2>
                </div>
              </div>
              <p className='f6 lh-copy measure mt2 mid-gray'>
                The chocolate habanero has an exotic and unusual taste, and is
                hotter than a regular habanero with a rating between 425,000 and
                577,000 Scoville units. Small slivers used in cooking can have a
                dramatic effect on the overall dish.
              </p>
            </div>
          </article>
        </h1>
      </div>
    );
  }
}

export default ProductCard;
