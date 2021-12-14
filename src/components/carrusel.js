import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Carrusel3 from "../img/carrusel3.png"
import Carrusel1 from "../img/carrusel1.png"
import Carrusel2 from "../img/carrusel2"

export default function CarouselComponent() {
    return (
        <div class="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    
                <img src={Carrusel1}/>
                </div>
                <div>
                    <img src={Carrusel2}/>
                </div>
                <div>
                <img src={Carrusel3}/>
                </div>
            </Carousel>
        </div>
    );
}