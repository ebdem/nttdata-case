import React from 'react'
import './logo.scss'

interface Props {
  fill?: string
  isHeader?: boolean
}

const Logo = ({ fill, isHeader }: Props) => {
  return (
    <div className={isHeader ? 'logo' : ''}>
      <svg
        width='24'
        height='25'
        viewBox='0 0 24 25'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M18 18.7C17.9 18.5 10.5 4.1 9.6 2.8C8.6 1.1 7.4 0 4.9 0C2.7 0 0 1 0 6.4V24.5H5.5V9.4C5.5 8.3 5.4 6.7 5.4 6.4C5.4 6.2 5.4 5.9 5.5 5.8C5.7 5.7 5.8 5.9 5.9 6C6 6.1 12.9 19.7 14.3 21.9C15.3 23.5 16.6 24.7 19 24.7C21.2 24.7 23.9 23.7 23.9 18.3V0.2H18.4V15.3C18.4 16.4 18.5 18 18.5 18.3C18.5 18.5 18.5 18.8 18.4 18.9C18.3 19.1 18.2 18.9 18 18.7Z'
          fill={fill}
        />
      </svg>
      <svg
        width='22'
        height='25'
        viewBox='0 0 22 25'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M0.799988 0.200012V5.40001H8.59999V24.5H14.1V5.40001H21.9V0.200012H0.799988Z'
          fill={fill}
        />
      </svg>
      <svg
        className={isHeader ? 'logo__svg' : ''}
        width='22'
        height='25'
        viewBox='0 0 22 25'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M0.599976 0.200012V5.40001H8.39998V24.5H13.9V5.40001H21.7V0.200012H0.599976Z'
          fill={fill}
        />
      </svg>
      <svg
        width='24'
        height='25'
        viewBox='0 0 24 25'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M15 0.200012H0.299988V24.4H15.3C21.2 24.5 23.1 21.5 23.1 15.9V8.80001C23.1 2.40001 20.6 0.200012 15 0.200012ZM17.5 16.1C17.5 18.4 16.7 19.3 14.7 19.3H5.79999V5.50001H14.7C16.7 5.50001 17.5 6.40001 17.5 8.70001V16.1Z'
          fill={fill}
        />
      </svg>
      <svg
        width='24'
        height='25'
        viewBox='0 0 24 25'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M7.39999 19.3C6.59999 19.3 5.59998 18.9 5.59998 16.8C5.59998 14.7 6.49999 14.3 7.39999 14.3H17.8V19.2L7.39999 19.3ZM15.4 0.200012H1.59998V5.40001H15.1C17.1 5.40001 17.9 6.30001 17.9 8.60001C17.9 8.60001 17.9 9.30001 17.9 9.40001H6.69998C2.39998 9.40001 0.299988 11.5 0.299988 16.4V17.5C0.299988 22.5 2.49999 24.5 6.89999 24.5H23.3V8.60001C23.3 2.50001 21.2 0.200012 15.4 0.200012Z'
          fill={fill}
        />
      </svg>
      <svg
        width='22'
        height='25'
        viewBox='0 0 22 25'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M0.299988 0.200012V5.40001H8.09999V24.5H13.6V5.40001H21.4V0.200012H0.299988Z'
          fill={fill}
        />
      </svg>
      <svg
        width='23'
        height='25'
        viewBox='0 0 23 25'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M7.10001 19.3C6.30001 19.3 5.3 18.9 5.3 16.8C5.3 14.7 6.20001 14.3 7.10001 14.3H17.5V19.2L7.10001 19.3ZM15.1 0.200012H1.3V5.40001H14.8C16.8 5.40001 17.6 6.30001 17.6 8.60001V9.40001H6.39999C2.09999 9.40001 0 11.5 0 16.4V17.5C0 22.5 2.20001 24.5 6.60001 24.5H23V8.60001C22.9 2.50001 21 0.200012 15.1 0.200012Z'
          fill={fill}
        />
      </svg>
    </div>
  )
}

export default Logo
