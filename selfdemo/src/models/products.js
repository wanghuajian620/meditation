/**
 * Revision History:
 *     Initail 2018/09/05   Wang Huajian
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
