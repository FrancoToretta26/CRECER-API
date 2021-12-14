import React, { Component } from 'react';
import ReactCardCarousel from 'react-card-carousel';

class MyCarousel extends Component {

  static get CARD_STYLE() {
    return {
      height: '200px',
      width: '200px',
      paddingTop: '80px',
      textAlign: 'center',
      background: '#52C0F5',
      color: '#FFF',
      fontSize: '12px',
      textTransform: 'uppercase',
      borderRadius: '10px',
    };
  }

  render() {
    return (
      <ReactCardCarousel autoplay={ true } autoplay_speed={ 2500 }>
        <div style={ MyCarousel.CARD_STYLE }>
            <img src="https://i1.wp.com/ahoramama.com.ar/wp-content/uploads/2021/02/pediatra-controles.jpg?resize=750%2C430&ssl=1" />
          First Card
        </div>
        <div style={ MyCarousel.CARD_STYLE }>
          Second Card
        </div>
        <div style={ MyCarousel.CARD_STYLE }>
          Third Card
        </div>
        <div style={ MyCarousel.CARD_STYLE }>
          Fourth Card
        </div>
        <div style={ MyCarousel.CARD_STYLE }>
          Fifth Card
        </div>
      </ReactCardCarousel>
    );
  }
}

export default MyCarousel;