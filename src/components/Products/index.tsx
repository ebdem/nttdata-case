import { useEffect, useState } from 'react'
import NProgress from 'nprogress'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import styled from '@emotion/styled'
import Drawer from '@mui/material/Drawer'
import { useTheme } from '@mui/material/styles'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows'
import DeleteIcon from '@mui/icons-material/Delete'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { addToCart, removeItem } from '../../redux/features/articleSlice'
import Card from '../Card'
import { useGetAllArticlesQuery, useUpdateNoteMutation } from '../../redux/features/articleAPI'
import Loading from '../Loading'
import CustomTab from '../Tabs'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  juatify-content: center;
  align-items: center;
  width: 100%;
  margin: 50px 0;
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin-bottom: 50px;
`

const Text = styled.p<any>`
  font-size: ${(props: any) => (props.fontSize ? props.fontSize : '32px')};
  font-weight: ${(props: any) => (props.fontWeight ? props.fontWeight : '500')};
  color: ${(props: any) => (props.color ? props.color : 'black')};
  margin: ${(props: any) => (props.margin ? props.margin : '0')};
`

const Groups = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const FavoriteButton = styled.button<any>`
  padding: 10px 10px;
  border: none;
  border-radius: 5px;
  background-color: ${(props: any) => (props.backgroundColor ? props.backgroundColor : 'black')};
  color: ${(props: any) => (props.color ? props.color : 'white')};
  cursor: pointer;
`

const Products = () => {
  const theme = useTheme()
  const [limit, setLimit] = useState(3)
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const cart = useSelector((state: any) => state.cart.cart)

  const [
    updateArticle,
    {
      isLoading: isLoadingUpdate,
      isError: isErrorUpdate,
      error: errorUpdate,
      isSuccess: isSuccessUpdate,
    },
  ] = useUpdateNoteMutation()

  const {
    isLoading,
    isFetching,
    isError,
    isSuccess,
    error,
    data: articles,
  } = useGetAllArticlesQuery(
    { page: 1, limit },
    { refetchOnFocus: false, refetchOnReconnect: false },
  )

  const loading = isLoading || isFetching

  const liked = articles?.filter((article) => article.isFavorited)

  const onSubmitHandler = async (data: any) => {
    updateArticle(data)
  }

  useEffect(() => {
    if (isSuccessUpdate) {
      toast.success('İşlem Başarılı', {
        position: 'top-right',
      })
    }
    if (isErrorUpdate || errorUpdate) {
      toast.error('Bir sorun Oluştu', {
        position: 'top-right',
      })
    }
    if (isLoadingUpdate) {
      toast.info('İşlem Gerçekleştiriliyor...', {
        position: 'top-right',
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoadingUpdate])

  useEffect(() => {
    if (isSuccess) {
      NProgress.done()
    }
    if (isError) {
      const err = error as any
      const resMessage = err.data.message || err.data.detail || err.message || err.toString()
      toast.error(resMessage, {
        position: 'top-right',
      })
      NProgress.done()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])

  return isSuccess ? (
    <Container>
      <Header>
        <Text color={theme.palette.text.primary}>Content title goes here</Text>
        <Groups>
          <FavoriteBorderIcon />
          <Text margin='0 30px 0 10px ' fontSize='16px' color={theme.palette.text.primary}>
            {liked?.length ?? 0} Ürün
          </Text>
          <ShoppingCartIcon />
          <Text margin='0 30px 0 10px ' fontSize='16px' color={theme.palette.text.primary}>
            {cart?.length ?? 0} Ürün
          </Text>
          <FavoriteButton
            onClick={() => {
              setOpen(true)
            }}
            backgroundColor={theme.palette.primary.main}
          >
            <FavoriteBorderIcon /> <CompareArrowsIcon color='primary' /> <ShoppingCartIcon />
          </FavoriteButton>
        </Groups>
      </Header>
      <Grid
        sx={{
          width: '80%',
          margin: '0 auto',
        }}
        container
        spacing={2}
      >
        {articles?.map((article) => {
          const itemInCart = cart?.find((item: any) => item.id === article.id)
          return (
            <Grid key={article.avatar} item xs={12} sm={6} md={4}>
              <Card
                likeIcon={
                  <FavoriteBorderIcon
                    style={{
                      color: article.isFavorited ? 'red' : '#D1D1D1',
                    }}
                  />
                }
                cartIcon={
                  itemInCart?.id === article.id ? (
                    <DeleteIcon
                      style={{
                        color: 'red',
                      }}
                    />
                  ) : (
                    <ShoppingCartIcon
                      style={{
                        color: '#D1D1D1',
                      }}
                    />
                  )
                }
                likeOnClick={() => onSubmitHandler(article)}
                cartOnClick={() => {
                  itemInCart?.id === article.id
                    ? dispatch(removeItem(article.id))
                    : dispatch(
                        addToCart({
                          id: article.id,
                          name: article.name,
                          avatar: article.avatar,
                          isFavorited: article.isFavorited,
                          createdAt: article.createdAt,
                        } as any),
                      )
                }}
                title={article.name}
                images={article.avatar}
                price={12000}
              />
              <Drawer
                transitionDuration={500}
                anchor={'right'}
                open={open}
                onClose={() => setOpen(false)}
              >
                <CustomTab articles={liked} onSubmitHandler={onSubmitHandler} />
              </Drawer>
            </Grid>
          )
        })}
      </Grid>
      <Button
        disabled={limit === 6}
        onClick={() => setLimit((limit) => limit + 3)}
        sx={{
          marginTop: '50px',
          padding: '16px 32px',
        }}
        variant='contained'
        endIcon={<TrendingFlatIcon />}
      >
        Daha Fazla
      </Button>
    </Container>
  ) : (
    <Loading />
  )
}

export default Products

//?? Emotion Styled Components used in src/components/Products/index.tsx
//?? onClick={() => dispatch(removeItem(item.id))} remove item from cart
