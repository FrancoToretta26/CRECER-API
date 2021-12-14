import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import CalendarioFoto from "../img/CalendarioVacunacion.jpg";
import "react-image-lightbox/style.css";
const images = [
  '//www.stamboulian.com.ar/wp-content/uploads/2020/06/Stamboulian-Calendario-Vacunacion-01-06-2020.jpg'
];

export default class LightboxExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div>
        <button type="button" onClick={() => this.setState({ isOpen: true })}>
            <img src="https://www.stamboulian.com.ar/wp-content/uploads/2020/06/Stamboulian-Calendario-Vacunacion-01-06-2020.jpg" />

        </button>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}