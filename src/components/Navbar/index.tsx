import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import SearchIcon from '@mui/icons-material/Search'
import { useTheme } from '@mui/material/styles'
import { SwitchModeButton } from '../SwitchModeButton'
import SelectComponent from '../Select'
import Logo from '../Logo'
import IconButton from '../Buttons/IconButtons'
import './navbar.scss'

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window
}

const Navbar = () => {
  const theme = useTheme()
  return (
    <Box
      component='nav'
      sx={({ palette }) => ({
        backgroundColor: palette.background.default,
        boxShadow: 'none',
        borderBottom: `1px solid ${palette.divider}`,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '80px',
        position: 'fixed',
        top: 0,
        width: '100%',
        overflow: 'hidden',
      })}
    >
      <Logo />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '50%',
        }}
      >
        <Box
          sx={{
            width: '80%',
            margin: '10px',
            border: '1px solid #89919A',
            borderRadius: 1,
            display: 'flex',
            flexDirection: 'row',
            padding: '0 0 0 2px',
          }}
        >
          <input className='search__input' placeholder='Search...' />
          <SelectComponent />
        </Box>
        <IconButton
          width='110px'
          margin='10px 0'
          color={theme.palette.background.default}
          bgColor={theme.palette.primary.main}
          children={<SearchIcon />}
        />
      </div>
      <SwitchModeButton />
    </Box>
  )
}

export default Navbar
