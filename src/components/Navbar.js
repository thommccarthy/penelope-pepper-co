import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class=' bg-green pa3 pa4-ns'>
          <a
            class='navhead link dim washed-red b f3 f-headline-ns tc db mb3 mb4-ns'
            href='#'
            title='Home'
          >
            <i className='fas fa-pepper-hot navpep mr3'></i>
            Penelope Pepper Co.
          </a>
          <div class='tc pb3 flex  justify-center justify-around'>
            <div />
            <div />
            <Link
              class='link dim washed-blue f5 f2-ns dib mr3'
              href='#'
              title='Home'
              to='/'
            >
              Home
            </Link>

            <a
              class='link dim washed-blue f6 f2-ns dib mr3'
              href='#'
              title='About'
            >
              About
            </a>
            <Link
              class='link dim washed-blue f6 f2-ns dib mr3'
              href='#'
              title='Store'
              to='/Store'
            >
              Store
            </Link>
            <a
              class='link dim washed-blue f6 f2-ns dib'
              href='#'
              title='Contact'
            >
              Contact
            </a>
            <div />
            <div />
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
