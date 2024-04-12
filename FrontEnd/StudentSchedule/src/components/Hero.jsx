import Carousel from "react-bootstrap/Carousel";
import CarouselImage from "./CarouselImage";
export default function Hero() {
  return (
    <section className="w-full ">
      <Carousel>
        <Carousel.Item>
          <CarouselImage url="./img/slide1.webp" />
          <Carousel.Caption>
            <h3>Estudia de manera organizada</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselImage url="./img/slide2.webp" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselImage url="./img/slide3.webp" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}
