import { useState, useEffect } from 'react'
import NProgress from 'nprogress'
import { toast } from 'react-toastify'
import { useGetAllArticlesQuery, useUpdateNoteMutation } from '../../redux/features/articleAPI'

function Home() {
  const [limit, setLimit] = useState(3)
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
    <div className='Home'>
      <div>
        {articles?.map((article) => (
          <div key={article.name}>
            <span>{article.name}</span>
            <img src={article.avatar} alt={article.avatar} />
            <button onClick={() => onSubmitHandler(article)}>
              {article.isFavorited ? 'liked' : 'ebu'}
            </button>
          </div>
        ))}
        <a href='https://vitejs.dev' target='_blank'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setLimit((limit) => limit + 3)}>count is {limit}</button>
        <p>
          Edit <code>src/Home.tsx</code> and save to test HMR
        </p>
      </div>
      {articles
        ?.filter((article) => article.isFavorited)
        .map((article) => (
          <div key={article.name}>
            <span>{article.name}</span>
          </div>
        ))}
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </div>
  )
}

export default Home
