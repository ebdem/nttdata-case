import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NProgress from 'nprogress'
import { toast } from 'react-toastify'
import { useGetAllArticlesQuery, useUpdateNoteMutation } from '../../redux/features/articleAPI'
import { addToCart, removeItem } from '../../redux/features/articleSlice'

function Home() {
  const [limit, setLimit] = useState(4)
  const dispatch = useDispatch()
  const { cartReducer } = useSelector((state: any) => state)

  const cart = cartReducer.cart

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

  const onSubmitHandler = async (data: any) => {
    updateArticle(data)
  }

  return (
    <div>
      <div>
        {articles?.map((article) => {
          const itemInCart = cart?.find((item: any) => item.id === article.id)

          return (
            <div key={article.name}>
              <span>{article.name}</span>
              <img src={article.avatar} alt={article.avatar} />
              <button onClick={() => onSubmitHandler(article)}>
                {article.isFavorited ? 'liked' : 'ebu'}
              </button>
              <button
                onClick={() => {
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
              >
                {itemInCart?.id === article.id ? 'remove' : 'Add to cart'}
              </button>
            </div>
          )
        })}
      </div>
      <p>{cart?.length ?? 0}</p>
      {cart?.map((item: any) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <img src={item.avatar} alt={item.avatar} />
          <span>{item.createdAt}</span>
          <button onClick={() => dispatch(removeItem(item.id))}>remove</button>
        </div>
      ))}
      <div className='card'>
        <button onClick={() => setLimit((limit) => limit + 3)}>count is {limit}</button>
      </div>
      {articles
        ?.filter((article) => article.isFavorited)
        .map((article) => (
          <div key={article.name}>
            <span>{article.name}</span>
          </div>
        ))}
    </div>
  )
}

export default Home
