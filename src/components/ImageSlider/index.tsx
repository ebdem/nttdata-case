import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import NProgress from 'nprogress'
import { toast } from 'react-toastify'
import { useGetRandomPhotoQuery } from '../../redux/features/unsplashAPI'

const slideStyles = {
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}

const sliderStyles = {
  position: 'relative',
  height: '100%',
}

const dotsContainerStyles = {
  display: 'flex',
  position: 'absolute',
  right: '0',
  bottom: '0',
  width: '100%',
  height: '58px',
  backgroundColor: 'black',
  opacity: '0.4',
  justifyContent: 'flex-end',
  alignItems: 'center',
  paddingRight: '20px',
}

const dotStyle = {
  margin: '0 3px',
  cursor: 'pointer',
  fontSize: '20px',
  position: 'relative',
  width: '12px',
  height: '12px',
  borderRadius: '50%',
  opacity: 1,
}

const ImageSlider = () => {
  const [activeDot, setActiveDot] = useState<Number | any>(0)
  const query = useSelector((state: any) => state.category.category)
  const date = new Date()
  const hours = date.getHours()

  const delay = 2500;
  const timeoutRef = useRef(null as any);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
      setActiveDot((prevIndex: number) =>
          prevIndex === unsplashPhotos?.results?.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [activeDot]);

  const {
    isLoading,
    isFetching,
    isError,
    isSuccess,
    error,
    data: unsplashPhotos,
  } = useGetRandomPhotoQuery({ page: hours, limit: 10, query } as any, {
    refetchOnFocus: false,
    refetchOnReconnect: false,
  })

  const loading = isLoading || isFetching

  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage:
      unsplashPhotos !== undefined
        ? `url(${unsplashPhotos?.results[activeDot]?.urls?.regular})`
        : '',
    zIndex: -9999,
  }

  useEffect(() => {
    if (isSuccess) {
      NProgress.done()
    }
    if (isError) {
      const err = error as any
      const resMessage = err.data.message || err.data.detail || err.message || err.toString()
      toast.error(resMessage, {
        position: 'top-right',
      })
      NProgress.done()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])

  return (
    <div
      style={{
        width: '100%',
        height: '520px',
        zIndex: -9999,
      }}
    >
      <div style={sliderStyles as any}>
        <div style={slideStylesWidthBackground as any}>
          <div style={dotsContainerStyles as any}>
            {unsplashPhotos?.results?.map((slide: any, slideIndex: any) => (
              <div
                style={
                  {
                    ...dotStyle,
                    backgroundColor: slideIndex === activeDot ? 'black' : 'white',
                    border: `1px solid ${slideIndex === activeDot ? 'white' : 'black'}`,
                  } as any
                }
                key={slideIndex}
                onClick={() => {
                  setActiveDot(slideIndex)
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageSlider
