import ImageGallery from 'react-image-gallery';
import React from 'react';

const Carousel = () => {

    const images = [
        {
          original: 'assets/img/portfolio/portfolio-details-1.jpg',
          thumbnail: 'assets/img/portfolio/portfolio-details-1.jpg',
        },
        {
          original: 'assets/img/portfolio/portfolio-details-2.jpg',
          thumbnail: 'assets/img/portfolio/portfolio-details-2.jpg',
        },
        {
          original: 'assets/img/portfolio/portfolio-details-3.jpg',
          thumbnail: 'assets/img/portfolio/portfolio-details-3.jpg',
        }
      ];

      
    return (
        <>
     <ImageGallery items={images} />;
        </>
    );
};

export default Carousel;
