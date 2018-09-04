/**
 *   Revision History:
 *       Initial: 2018/09/04  Wang Huajian
 */

export default {
  namespace: 'products',
  state: [],
  reducers: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
  },
};
