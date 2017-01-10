import React, { Component } from 'react'
import Slider from '../src/slider'

export default class Responsive extends Component {
  render() {
    var settings = {
      infinite: false,
      slidesToShow: 6,
      slidesToScroll: 1,
      initialSlide: 17,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }]
    };
    return (
      <div>
        <h2> Responsive </h2>
        <Slider {...settings}>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
          <div><h3>6</h3></div>
          <div><h3>7</h3></div>
          <div><h3>8</h3></div>
          <div><h3>9</h3></div>
          <div><h3>10</h3></div>
          <div><h3>11</h3></div>
          <div><h3>12</h3></div>
          <div><h3>13</h3></div>
          <div><h3>14</h3></div>
          <div><h3>15</h3></div>
          <div><h3>16</h3></div>
          <div><h3>17</h3></div>
        </Slider>
      </div>
    );
  }
};
