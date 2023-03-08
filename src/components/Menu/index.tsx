import { useState, useRef } from 'react'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import { Menu, MenuItem } from '@mui/material'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import SearchIcon from '@mui/icons-material/Search'
import { useTheme } from '@mui/material/styles'
import { useDispatch } from 'react-redux'
import IconButton from '../Buttons/IconButtons'
import { setOpen } from '../../redux/features/detailMenuSlice'
import '../Navbar/navbar.scss'
import useMediaQuery from '../../hooks/useMediaQuery'
import ResponsiveMenu from './responsiveMenu'
import { useOnHoverOutside } from '../../hooks/useOnHoverOutside'
import DetailMenu from './detailMenu'

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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const dispatch = useDispatch()
  const open = Boolean(anchorEl)
  const dropdownRef = useRef(null)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
    //dispatch(setOpen(Boolean(event.currentTarget)))
  }
  const handleClose = () => {
    setAnchorEl(null)
    // dispatch(setOpen(false))
  }

  //useOnHoverOutside(dropdownRef, handleClose) // Call the hook

  const theme = useTheme()
  const matchesTablet = useMediaQuery('(min-width: 1200px)')

  const dataSource = matchesTablet ? pages : pages.slice(0, 5)
  const responsiveMenuDataSource = matchesTablet ? pages : pages.slice(5, pages.length)

  return (
    <div>
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
          zIndex: 9,
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
              ref={dropdownRef}
            >
              {dataSource.map((page) => (
                <Button
                  aria-owns={anchorEl ? 'simple-menu' : undefined}
                  aria-haspopup='true'
                  onClick={handleClick}
                  onMouseOver={handleClick}
                  aria-expanded={open ? 'true' : undefined}
                  key={page}
                  sx={({ palette }) => ({
                    color: palette.grey[500],
                    fontWeight: 500,
                    fontSize: '14px',
                    textTransform: 'capitalize',
                    my: 2,
                    marginRight: '30px',
                    display: 'block',
                    textAlign: 'center',
                    cursor: 'pointer',
                    '&:hover': {
                      textDecoration: 'underline',
                      textDecorationColor: palette.primary.main,
                      textDecorationLine: 'underline',
                      textDecorationThickness: '2px',
                      backgroundColor: 'transparent',
                    },
                  })}
                >
                  {page}
                </Button>
              ))}
              {!matchesTablet && <ResponsiveMenu dataSource={responsiveMenuDataSource} />}
            </Box>
          </Toolbar>
        </Container>
      </Box>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        <DetailMenu />
      </Menu>
    </div>
  )
}
export default MenuBar
