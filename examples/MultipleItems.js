import React, { Component } from 'react'
import Slider from '../src/slider'

export default class MultipleItems extends Component {
  render() {
    const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      initialSlide: 1
    };
    return (
      <div>
        <h2> Multiple items </h2>
        <Slider {...settings}>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
        </Slider>
      </div>
    );
  }
}
