import * as React from 'react'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search'
import { useTheme } from '@mui/material/styles'
import IconButton from '../Buttons/IconButtons'
import '../Navbar/navbar.scss'

const pages = [
  'Products',
  'Pricing',
  'Blog',
  'About',
  'Contact',
  'Help',
  'Careers',
  'Privacy',
  'Service',
  'Security',
  'Status',
  'Docs',
]

function MenuBar() {
  const theme = useTheme()
  const navigate = useNavigate()

  return (
    <Box
      sx={({ palette }) => ({
        backgroundColor: palette.background.default,
        boxShadow: 'none',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '65px',
        position: 'fixed',
        top: '80px',
        width: '100%',
        overflow: 'hidden',
        zIndex: 9999,
      })}
    >
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box
            sx={{
              display: { xs: 'flex', sm: 'none' },
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'center',
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
                padding: '2px',
              }}
            >
              <input className='search__input' placeholder='Search...' />
            </Box>
            <IconButton
              width='110px'
              margin='10px 0'
              color={theme.palette.background.default}
              bgColor={theme.palette.primary.main}
              children={<SearchIcon />}
            />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'flex' },
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onMouseEnter={() => {console.log("in")}}
                onMouseLeave={() => {console.log("out")}}
                onClick={() => {
                  navigate(`/${page.toLowerCase()}`)
                }}
                sx={({ palette }) => ({
                  color: palette.grey[500],
                  fontWeight: 500,
                  fontSize: '14px',
                  textTransform: 'capitalize',
                  my: 2,
                  display: 'block',
                  textAlign: 'center',
                  '&:hover': {
                    textDecoration:"underline",
                    
                  }
                })}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </Box>
  )
}
export default MenuBar
