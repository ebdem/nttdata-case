import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Input from '@mui/material/Input'
import InputAdornment from '@mui/material/InputAdornment'
import OutlinedInput from '@mui/material/OutlinedInput'
import { SwitchModeButton } from '../SwitchModeButton'

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window
}

const drawerWidth = 240
const navItems = ['About', 'Contact']

export default function DrawerAppBar(props: Props) {
  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [age, setAge] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string)
  }

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant='h6' sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item}></ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component='nav'
        sx={({ palette }) => ({
          backgroundColor: palette.background.default,
        })}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <svg
              width='24'
              height='25'
              viewBox='0 0 24 25'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M18 18.7C17.9 18.5 10.5 4.1 9.6 2.8C8.6 1.1 7.4 0 4.9 0C2.7 0 0 1 0 6.4V24.5H5.5V9.4C5.5 8.3 5.4 6.7 5.4 6.4C5.4 6.2 5.4 5.9 5.5 5.8C5.7 5.7 5.8 5.9 5.9 6C6 6.1 12.9 19.7 14.3 21.9C15.3 23.5 16.6 24.7 19 24.7C21.2 24.7 23.9 23.7 23.9 18.3V0.2H18.4V15.3C18.4 16.4 18.5 18 18.5 18.3C18.5 18.5 18.5 18.8 18.4 18.9C18.3 19.1 18.2 18.9 18 18.7Z'
                fill='#0059BC'
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
                fill='#0059BC'
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
                d='M0.599976 0.200012V5.40001H8.39998V24.5H13.9V5.40001H21.7V0.200012H0.599976Z'
                fill='#0059BC'
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
                fill='#0059BC'
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
                fill='#0059BC'
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
                fill='#0059BC'
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
                fill='#0059BC'
              />
            </svg>
          </Typography>
          <SwitchModeButton />
          <Box>
            <FormControl sx={{ m: 1, width: '25ch' }} variant='outlined'>
              <InputLabel htmlFor='outlined-adornment-password'>Search</InputLabel>
              <OutlinedInput
                sx={{ paddingRight: 0 }}
                id='outlined-adornment-password'
                type={'text'}
                endAdornment={
                  <InputAdornment position='end'>
                    <FormControl fullWidth>
                      <InputLabel id='demo-simple-select-label'>Age</InputLabel>
                      <Select
                        sx={{ width: 100 }}
                        labelId='demo-simple-select-label'
                        id='demo-simple-select'
                        value={age}
                        label='Age'
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </InputAdornment>
                }
                label='Password'
              />
            </FormControl>
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: 'blue' }}>
                <a
                  style={{
                    textDecoration: 'none',
                    color: 'blue',
                  }}
                  href={`/${item.toLowerCase()}`}
                >
                  {item}
                </a>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component='main' sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde fugit veniam eius,
          perspiciatis sunt? Corporis qui ducimus quibusdam, aliquam dolore excepturi quae.
          Distinctio enim at eligendi perferendis in cum quibusdam sed quae, accusantium et aperiam?
          Quod itaque exercitationem, at ab sequi qui modi delectus quia corrupti alias distinctio
          nostrum. Minima ex dolor modi inventore sapiente necessitatibus aliquam fuga et. Sed
          numquam quibusdam at officia sapiente porro maxime corrupti perspiciatis asperiores,
          exercitationem eius nostrum consequuntur iure aliquam itaque, assumenda et! Quibusdam
          temporibus beatae doloremque voluptatum doloribus soluta accusamus porro reprehenderit eos
          inventore facere, fugit, molestiae ab officiis illo voluptates recusandae. Vel dolor nobis
          eius, ratione atque soluta, aliquam fugit qui iste architecto perspiciatis. Nobis,
          voluptatem! Cumque, eligendi unde aliquid minus quis sit debitis obcaecati error, delectus
          quo eius exercitationem tempore. Delectus sapiente, provident corporis dolorum quibusdam
          aut beatae repellendus est labore quisquam praesentium repudiandae non vel laboriosam quo
          ab perferendis velit ipsa deleniti modi! Ipsam, illo quod. Nesciunt commodi nihil corrupti
          cum non fugiat praesentium doloremque architecto laborum aliquid. Quae, maxime recusandae?
          Eveniet dolore molestiae dicta blanditiis est expedita eius debitis cupiditate porro sed
          aspernatur quidem, repellat nihil quasi praesentium quia eos, quibusdam provident.
          Incidunt tempore vel placeat voluptate iure labore, repellendus beatae quia unde est
          aliquid dolor molestias libero. Reiciendis similique exercitationem consequatur, nobis
          placeat illo laudantium! Enim perferendis nulla soluta magni error, provident repellat
          similique cupiditate ipsam, et tempore cumque quod! Qui, iure suscipit tempora unde rerum
          autem saepe nisi vel cupiditate iusto. Illum, corrupti? Fugiat quidem accusantium nulla.
          Aliquid inventore commodi reprehenderit rerum reiciendis! Quidem alias repudiandae eaque
          eveniet cumque nihil aliquam in expedita, impedit quas ipsum nesciunt ipsa ullam
          consequuntur dignissimos numquam at nisi porro a, quaerat rem repellendus. Voluptates
          perspiciatis, in pariatur impedit, nam facilis libero dolorem dolores sunt inventore
          perferendis, aut sapiente modi nesciunt.
        </Typography>
      </Box>
    </Box>
  )
}
