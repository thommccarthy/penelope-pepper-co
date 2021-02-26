import React, { Component } from 'react';

export class MainAd extends Component {
  render() {
    return (
      <div>
        <article data-name='article-full-bleed-background'>
          <div className='cf bgbody'>
            <div className='fl pa3 pa4-ns bg-light-red navy measure-narrow f3 times'>
              <header className='bb b--black-70 pv4'>
                <h3 className='f2 fw7 ttu tracked lh-title mt0 mb3 avenir '>
                  It's pepper time!
                </h3>
                <h4 className='f3 fw4 lh-title mt0'>
                  in Philadelphia, Pennsylvania
                  <i className='fas fa-pepper-hot ml4'></i>
                </h4>
              </header>
              <section class='pt5 pb4'>
                <p class='times lh-copy measure f4 mt0'>
                  Penelope's peppers brings the heat from fair trade pepper
                  growers from around the globe. We carry a huge variety of
                  incredibly delicious peppers, ranging from deliciously sweet
                  bells to the transcendantly hot Naga Mega Scorpion.
                  <p>
                    We sell fresh, dried, seeds, plants and flakes. We have
                    something special for your perfect spicy recipe!
                  </p>
                </p>
              </section>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default MainAd;
