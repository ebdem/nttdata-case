import { IconButton } from '@mui/material'
import './Card.scss'

interface CardProps {
  images: string
  title: string
  price: number
  likeIcon: JSX.Element
  cartIcon: JSX.Element
  likeOnClick: () => void
  cartOnClick: () => void
}

export default function Card(props: CardProps) {
  return (
    <div className='card'>
      <div className='wrapper'>
        <div className='card_img' style={{ backgroundImage: `url(${props.images})` }}></div>
        <div className='heart'>
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
        </div>
        <div className='cardInfo'>
          <h1>{props.title}</h1>
          <p className='date_'>{props.price} TL</p>
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
