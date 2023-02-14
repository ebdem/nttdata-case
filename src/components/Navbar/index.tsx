import Box from '@mui/material/Box'
import SearchIcon from '@mui/icons-material/Search'
import { useTheme } from '@mui/material/styles'
import { useDispatch } from 'react-redux'
import { setcategory } from '../../redux/features/categorySlice'
import { SwitchModeButton } from '../SwitchModeButton'
import SelectComponent from '../Select'
import Logo from '../Logo'
import IconButton from '../Buttons/IconButtons'
import './navbar.scss'
import { useState } from 'react'
import { toast } from 'react-toastify'

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window
}

const Navbar = () => {
  const theme = useTheme()
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState<string>('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }
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
        zIndex: 9,
      })}
    >
      <Logo isHeader={true} fill='#0059BC' />
      <Box
        sx={{
          display: { xs: 'none', sm: 'flex' },
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
            padding: {
              sm: '0 10px',
              lg: '0 0 0 10px',
            },
          }}
        >
          <input
            onChange={handleChange}
            value={inputValue}
            className='search__input'
            placeholder='Search...'
          />
          <SelectComponent />
        </Box>
        <IconButton
          //disabled={inputValue.trim() === ''}
          width='110px'
          margin='10px 0'
          color={theme.palette.background.default}
          bgColor={theme.palette.primary.main}
          children={<SearchIcon />}
          onClick={() =>
            inputValue.trim() === ''
              ? toast.error('Input Boş Bırakılamaz', {
                  position: 'top-right',
                })
              : dispatch(setcategory(inputValue.replace(/\s/g, '')))
          }
        />
      </Box>
      <SwitchModeButton />
    </Box>
  )
}

export default Navbar
