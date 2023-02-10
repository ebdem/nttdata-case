import React from 'react'
import { Slide } from 'react-slideshow-image'
import { imageSlideData } from '../../data/imageSlideData'
import './ImageSlider.scss'

const ImageSlider = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '480px',
        marginTop: '100px',
        zIndex: '-9999',
      }}
    >
      <Slide
        cssClass='slide'
        nextArrow={<div style={{ display: 'none' }} />}
        prevArrow={<div style={{ display: 'none' }} />}
      >
        {imageSlideData.map((item) => (
          <div key={item.url} className='each-slide-effect'>
            <div
              style={{
                height: '470px',
                backgroundImage: item.url,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                position: 'relative',
              }}
            >
              <div className='slide__button' />
            </div>
          </div>
        ))}
      </Slide>
    </div>
  )
}

export default ImageSlider
