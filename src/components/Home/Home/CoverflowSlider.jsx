import React from 'react';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';

const CoverflowSlider = () => {
  return (
    <>
     <StyleRoot>
    <Coverflow
      displayQuantityOfSide={2}
      navigation
      infiniteScroll
      enableHeading
      media={{
        '@media (max-width: 900px)': {
          width: '600px',
          height: '300px'
        },
        '@media (min-width: 900px)': {
          width: '960px',
          height: '600px'
        }
      }}
    >
      <img src='https://c4.wallpaperflare.com/wallpaper/228/1000/898/he-he-he-wallpaper-preview.jpg' alt='Album one' data-action="https://facebook.github.io/react/"/>
      <img src='https://c4.wallpaperflare.com/wallpaper/796/62/343/close-up-photo-of-flower-polen-wallpaper-thumb.jpg' alt='Album two' data-action="http://passer.cc"/>
      <img src='https://c4.wallpaperflare.com/wallpaper/228/1000/898/he-he-he-wallpaper-preview.jpg' alt='Album three' data-action="https://doce.cc/"/>
      <img src='https://c4.wallpaperflare.com/wallpaper/796/62/343/close-up-photo-of-flower-polen-wallpaper-thumb.jpg' alt='Album four' data-action="http://tw.yahoo.com" />
    </Coverflow>
  </StyleRoot>
    </>
  );
};


export default CoverflowSlider;