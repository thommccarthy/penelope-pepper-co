import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import slide1 from './media/slide1.jpg';
import slide2 from './media/slide2.jpg';
import slide3 from './media/slide3.png';
import yellowbhutslide from '../store/media/pepperslide/yellowbhutslide.png';
import chocolateslide from '../store/media/pepperslide/chocolateslide.png';
import scorpionslide from '../store/media/pepperslide/scorpionslide.png';
import yellowreaperslide from '../store/media/pepperslide/yellowreaperslide.png';
import flameleft from './flameleft.svg';

class HomeCarousel extends Component {
  render() {
    return (
      <div>
        {flameleft}
        <div className='carouselGrid mt6'>
          <div
            id='carousel'
            class='carousel-wrapper  ba bw1 ma2 b--black w-35 mt3'
          >
            <Carousel
              infiniteLoop={true}
              useKeyboardArrows={true}
              autoPlay={true}
              showThumbs={false}
              showStatus={false}
              interval={1400}
              showIndicators={false}
              showArrows={false}
              transitionTime={1}
            >
              <div className='bg-light-green '>
                <img src={yellowreaperslide} />
              </div>
              <div className='bg-gold'>
                <img src={chocolateslide} />
              </div>
              <div className='bg-purple'>
                <img src={scorpionslide} />
              </div>
              <div className='bg-orange'>
                <img src={yellowbhutslide} />
              </div>
            </Carousel>
          </div>
          <div className='heatarticle measure-wide '>
            <h1>THE HEAT IS ON</h1>
            <p className='f5 dark-gray arial'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Why do we use it?
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeCarousel;
