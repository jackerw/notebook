import { ProList } from '../server/api'

export default {
  namespace: 'note',
  state: {
    count: 1
  },

  reducers: {
    addCount(state, { payload }) {
      return { ...state, ...payload }
    },
  },
  effects: {
    *fetchProList(_, { call, put }) {
      const response = yield call(ProList, _.payload);
      console.log(response,'哈哈哈');
    },
  },
  subscriptions: {
   
  },
}
