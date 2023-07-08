import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="assets/img/slide/slide-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>We are best for provide our services </h3>
          <p>We started our business at 2012 from till now we have a great success for our business.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="assets/img/slide/slide-2.jpg"
          alt="First slide"
        />

        <Carousel.Caption>
          <h3> We are best for provide our services </h3>
          <p>We started our business at 2012 from till now we have a great success for our business.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
     <img
          className="d-block w-100"
          src="assets/img/slide/slide-3.jpg"
          alt="First slide"
        />

        <Carousel.Caption>
          <h3>We are best for provide our services </h3>
          <p>We started our business at 2012 from till now we have a great success for our business.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;