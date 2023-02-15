import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { removeAll, removeItem } from '../../redux/features/articleSlice'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import DeleteIcon from '@mui/icons-material/Delete'
import Card from '../Card'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import IconButton from '../Buttons/IconButtons'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, width: '370px' }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export default function CustomTab({
  articles,
  onSubmitHandler,
}: {
  articles: any
  onSubmitHandler: any
}) {
  const [value, setValue] = React.useState(0)
  const dispatch = useDispatch()

  const cart = useSelector((state: any) => state.cart.cart)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
          <Tab label='Sepet' {...a11yProps(0)} />
          <Tab label='Favoriler' {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Grid
          sx={{
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
          }}
          container
          spacing={2}
        >
          {cart?.length > 0 && (
            <IconButton
              bgColor='red'
              color='white'
              children={<DeleteIcon />}
              margin='10px 0'
              width='100px'
              onClick={() => {
                dispatch(removeAll())
              }}
            />
          )}
          {cart?.map((crt: any) => {
            return (
              <div
                style={{
                  marginBottom: '10px',
                }}
                key={crt.avatar}
              >
                <Card
                  cartIcon={
                    <DeleteIcon
                      style={{
                        color: 'red',
                      }}
                    />
                  }
                  cartOnClick={() => {
                    dispatch(removeItem(crt.id))
                  }}
                  title={crt.name}
                  images={crt.avatar as string}
                  price={12000}
                />
              </div>
            )
          })}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid
          sx={{
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
          }}
          container
          spacing={2}
        >
          {articles?.map((article: any) => {
            return (
              <div
                style={{
                  marginBottom: '10px',
                }}
                key={article.avatar}
              >
                <Card
                  likeIcon={
                    <FavoriteBorderIcon
                      style={{
                        color: 'red',
                      }}
                    />
                  }
                  likeOnClick={() => onSubmitHandler(article)}
                  title={article.name}
                  images={article.avatar as string}
                  price={12000}
                />
              </div>
            )
          })}
        </Grid>
      </TabPanel>
    </Box>
  )
}
