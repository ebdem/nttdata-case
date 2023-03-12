import React from 'react'
import { useTheme } from '@mui/material/styles'
import { IconButton } from '@mui/material'
import './Card.scss'

interface CardProps {
  images: string
  title: string
  price: number
  likeIcon?: JSX.Element
  cartIcon?: JSX.Element
  likeOnClick?: () => void
  cartOnClick?: () => void
}

export default function Card(props: CardProps) {
  const theme = useTheme()
  return (
    <div className='card'>
      <div className='wrapper'>
        <div className='card_img' style={{ backgroundImage: `url(${props.images})` }}></div>
        <div className='heart'>
          {props.likeIcon && (
            <IconButton
              style={{
                padding: '8px',
                margin: '0 0 10px 0',
                backgroundColor: 'white',
              }}
              onClick={props.likeOnClick}
            >
              {props.likeIcon}
            </IconButton>
          )}
          {props.cartIcon && (
            <IconButton
              style={{
                padding: '8px',
                margin: '0',
                backgroundColor: 'white',
              }}
              onClick={props.cartOnClick}
            >
              {props.cartIcon}
            </IconButton>
          )}
        </div>
        <div className='cardInfo'>
          <a
            style={{
              color: theme.palette.mode === 'dark' ? 'white' : '#00254F',
            }}
            href='https://google.com'
          >
            {' '}
            <h1>{props.title}</h1>
          </a>
          <p
            style={{
              backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : '#E6EEF8',
            }}
            className='date_'
          >
            {props.price} TL
          </p>
          <div>
            <div className='desc'>Description</div>
            <div className='content'>
              Lorem ipsum dolor sit amet consectetur. Turpis dolor vulputate velit id sit leo
              aliquet id at. Vel tellus tempus lacus tristique nulla pretium erat duis.
            </div>
            <div className='cargo'>Ücretsiz - Aynı gün kargo</div>
          </div>
        </div>
      </div>
    </div>
  )
}
