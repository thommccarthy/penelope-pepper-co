import React, { Component } from 'react';

class HomeBanner extends Component {
  render() {
    return (
      <div>
        <section class='ph3 ph5-ns pv5 '>
          <article class='mw8 center br2 ba b--pink bg-yellow shadow-3'>
            <div class='dt-ns dt--fixed-ns w-100'>
              <div class='pa3 pa4-ns dtc-ns v-mid'>
                <div>
                  <h2 class='fw4 red mt0 mb3'>Spice up your inbox </h2>
                  <p class='black-70 measure lh-copy mv0'>
                    Join the spiciest mailing list in the region for the most
                    scorching hot deals and some occasional blogging.
                  </p>
                </div>
              </div>
              <div class='pa3 pa4-ns dtc-ns v-mid'>
                <a
                  href='#'
                  class='no-underline f6 tc db w-100 pv3 bg-animate bg-red hover-bg-dark-green white br2'
                >
                  Sign up for free
                </a>
              </div>
            </div>
          </article>
        </section>
      </div>
    );
  }
}

export default HomeBanner;
