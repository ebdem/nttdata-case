import * as React from 'react'
import Button from '@mui/material/Button'

interface ButtonProps {
  color?: string
  bgColor?: string
  children?: React.ReactNode
  width?: string
  variant?: 'text' | 'outlined' | 'contained'
  height?: string
  padding?: string
  margin?: string
}

const IconButton = ({
  bgColor,
  color,
  children,
  width,
  variant,
  height,
  margin,
  padding,
  ...props
}: ButtonProps) => {
  return (
    <Button
      {...props}
      variant='contained'
      sx={{
        backgroundColor: bgColor,
        color: color,
        width: width,
        height: height,
        padding: padding,
        margin: margin,
      }}
      aria-label='Search'
      component='label'
    >
      {children}
    </Button>
  )
}

export default IconButton
