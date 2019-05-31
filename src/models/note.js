
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
    
  },
  subscriptions: {
   
  },
}
