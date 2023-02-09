import { articleAPI } from './features/articleAPI'

const { reducer } = articleAPI

const reducers = (state: any, action: any) => reducer(state, action)

test('reducers', () => {
  let state
  state = reducers(
    {
      articleAPI: {
        queries: {
          'getAllArticles({"limit":3,"page":1})': {
            status: 'pending',
            endpointName: 'getAllArticles',
            requestId: 'Am3goKbwk58yMZeLyXqQK',
            originalArgs: { page: 1, limit: 3 },
            startedTimeStamp: 1675981731002,
          },
        },
        mutations: {},
        provided: {},
        subscriptions: {
          'getAllArticles({"limit":3,"page":1})': {
            Am3goKbwk58yMZeLyXqQK: {
              refetchOnReconnect: false,
              refetchOnFocus: false,
              pollingInterval: 0,
            },
          },
        },
        config: {
          online: true,
          focused: true,
          middlewareRegistered: true,
          refetchOnFocus: false,
          refetchOnReconnect: false,
          refetchOnMountOrArgChange: false,
          keepUnusedDataFor: 60,
          reducerPath: 'articleAPI',
        },
      },
    },
    {
      type: 'articleAPI/executeQuery/fulfilled',
      payload: [
        {
          createdAt: '2023-02-06T05:32:16.440Z',
          name: 'Winston Kihn PhD',
          avatar:
            'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/713.jpg',
          isFavorited: false,
          id: '1',
        },
        {
          createdAt: '2023-02-06T09:06:12.668Z',
          name: 'Miss Andy Bartoletti',
          avatar:
            'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1077.jpg',
          isFavorited: true,
          id: '2',
        },
        {
          createdAt: '2023-02-06T10:20:19.537Z',
          name: 'Hector Berge',
          avatar:
            'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/6.jpg',
          isFavorited: false,
          id: '3',
        },
      ],
      meta: {
        fulfilledTimeStamp: 1675981731380,
        baseQueryMeta: { request: {}, response: {} },
        RTK_autoBatch: true,
        arg: {
          type: 'query',
          subscribe: true,
          subscriptionOptions: {
            refetchOnReconnect: false,
            refetchOnFocus: false,
            pollingInterval: 0,
          },
          endpointName: 'getAllArticles',
          originalArgs: { page: 1, limit: 3 },
          queryCacheKey: 'getAllArticles({"limit":3,"page":1})',
        },
        requestId: 'Am3goKbwk58yMZeLyXqQK',
        requestStatus: 'fulfilled',
      },
    },
  )
  expect(state).toEqual({
    queries: {},
    mutations: {},
    provided: {
      articles: {
        '1': ['getAllArticles({"limit":3,"page":1})'],
        '2': ['getAllArticles({"limit":3,"page":1})'],
        '3': ['getAllArticles({"limit":3,"page":1})'],
        LIST: ['getAllArticles({"limit":3,"page":1})'],
      },
    },
    subscriptions: {},
    config: {
      online: true,
      focused: true,
      middlewareRegistered: false,
      refetchOnFocus: false,
      refetchOnReconnect: false,
      refetchOnMountOrArgChange: false,
      keepUnusedDataFor: 60,
      reducerPath: 'articleAPI',
    },
  })
})
