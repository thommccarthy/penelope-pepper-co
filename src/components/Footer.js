import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer class='ph3 ph4-ns pv3 bt b--black-10 black-70'>
          <a href='mailto:' class='link b f3 f2-ns dim black-70 lh-solid'>
            hello@penelopepepperco.com
          </a>
          <p class='f6 db b ttu lh-solid'>© 2021 Penelope Pepper Co.</p>
          <div class='mt5'>
            <a
              href='/language/'
              title='Language'
              class='f6 dib pr2 mid-gray dim'
            >
              Language
            </a>
            <a href='/terms/' title='Terms' class='f6 dib ph2 mid-gray dim'>
              Terms of Use
            </a>
            <a href='/privacy/' title='Privacy' class='f6 dib pl2 mid-gray dim'>
              Privacy
            </a>
          </div>
          <i class='fab fa-instagram center ma4 dim f1'></i>
          <i class='fab fa-facebook-f dim f1 pa3'></i>
        </footer>
      </div>
    );
  }
}

export default Footer;
