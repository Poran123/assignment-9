import Carousel from 'react-bootstrap/Carousel';
import "./Carousal.css";

function CustomCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="overlay"></div>

        <div className="carousal-image" style={{backgroundImage: "url(img/event.jpg)"}}></div>

        <Carousel.Caption>
          <h1>Naina event</h1>
          <p>No. 1 leading event managementy agency in Bangladesh</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className="overlay"></div>

        <div className="carousal-image" style={{backgroundImage: "url(img/slider-bg3.jpg)"}}></div>

        <Carousel.Caption>
          <h1>Weeding ceremony</h1>
          <p>Begin your sweet moments from here</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className="overlay"></div>

        <div className="carousal-image" style={{backgroundImage: "url(img/rock.jpg)"}}></div>

        <Carousel.Caption>
          <h1>Music concert</h1>
          <p>Rock with us, chill with us!</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className="overlay"></div>

        <div className="carousal-image" style={{backgroundImage: "url(img/birthday.jpg)"}}></div>
        
        <Carousel.Caption>
          <h1>Birthday celebration</h1>
          <p>
            Make your birthday a bit more memorable with us
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CustomCarousel;