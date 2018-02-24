import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import CarouselImg1 from './images/1.jpg';
import CarouselImg2 from './images/2.jpg';
import CarouselImg3 from './images/3.jpg';
 
export default class SlideShow extends Component {
  render() {
    return (
      <Carousel
        showStatus = { false }
        showThumbs = { false }
        showArrows = { false }
        autoPlay = { true }
        infiniteLoop = { true }
      >
        <div>
          <img src={CarouselImg1} alt='无问西东' />
        </div>
        <div>
          <img src={CarouselImg2} alt='神秘巨星' />
        </div>
        <div>
          <img src={CarouselImg3} alt='寻梦环游记' />
        </div>
      </Carousel>
      );
  }
}