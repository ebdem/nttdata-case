import React, { useContext } from 'react'
import { Box, IconButton, useTheme } from '@mui/material'
import DarkIcon from '@mui/icons-material/Brightness4'
import LightIcon from '@mui/icons-material/Brightness7'

import { ColorContext } from '../../Theme/ColorContext'

interface Props {
  color?:
    | 'inherit'
    | 'default'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
    | undefined
}
export const SwitchModeButton = ({ color, ...props }: Props) => {
  const theme = useTheme()
  const colorMode = useContext(ColorContext)

  return (
    <IconButton {...props} sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color={color}>
      {theme.palette.mode === 'dark' ? <LightIcon /> : <DarkIcon />}
    </IconButton>
  )
}
