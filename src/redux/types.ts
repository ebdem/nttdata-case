export type IArticle = {
  id: string
  name: string
  avatar: string
  createdAt: Date
  isFavorited: boolean
}
export type IMutateArticle = {
  isFavorited: boolean
}

export type IGenericResponse = {
  status: string
  message: string
}

export type IArticleResponse = {
  status: string
  article: IArticle
}

export type IArticlesResponse = {
  status: string
  results: number
  articles: IArticle[]
}
