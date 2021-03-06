import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <div>
        <div className='tc bg-gold navy'>
          Open Monday-Saturday! Only in West Phila.
        </div>
        <nav className=' bg-green pa3 pa4-ns'>
          <a
            className='navhead link washed-red b f1 f-headline-ns tc db mb3 mb4-ns hover-near-white'
            href='#'
            title='Home'
          >
            <i className='fas fa-pepper-hot navpep mr3 red hover-gold'></i>
            Penelope Pepper Co.
          </a>

          <div className='tc pb3 flex  justify-center justify-around'>
            <div />
            <div />
            <Link
              className='navlinks link washed-blue f4 f2-ns dib mr3 hover-purple'
              href='#'
              title='Home'
              to='/'
            >
              Home
            </Link>

            <a
              className='navlinks link washed-blue f4 f2-ns dib mr3 hover-pink'
              href='#'
              title='About'
            >
              About
            </a>
            <Link
              className='navlinks link hover-gold washed-blue f4 f2-ns dib mr3'
              href='#'
              title='Store'
              to='/Store'
            >
              Store
            </Link>
            <a
              className='navlinks link hover-hot-pink washed-blue f4 f2-ns dib'
              href='#'
              title='Contact'
            >
              Contact
            </a>
            <div />

            <div />
          </div>
        </nav>
        <div className='zigzag h1 w-100 center gold bg-light-gray'></div>
      </div>
    );
  }
}

export default Navbar;
