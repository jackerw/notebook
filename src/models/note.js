import { ProList } from '../server/api'
import { returnPromise } from '../utils/index'

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
      console.log(_.payload);
      const response = yield call(ProList, _.payload);
      return returnPromise(response);
      console.log(response,'哈哈哈');
    },
  },
  subscriptions: {
   
  },
}
