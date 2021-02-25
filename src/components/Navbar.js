import React, { Component } from 'react';

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
            Penelope Pepper Co.
          </a>
          <div class='tc pb3 flex  justify-center justify-around'>
            <div />
            <div />
            <a
              class='link dim washed-blue f5 f2-ns dib mr3'
              href='#'
              title='Home'
            >
              Home
            </a>

            <a
              class='link dim washed-blue f6 f2-ns dib mr3'
              href='#'
              title='About'
            >
              About
            </a>
            <a
              class='link dim washed-blue f6 f2-ns dib mr3'
              href='#'
              title='Store'
            >
              Store
            </a>
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
