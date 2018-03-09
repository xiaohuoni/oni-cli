//FIXME:还没编写文件内的修改，这里要修改services的文件名
import * as pageService from '../services/example'
export default {
//FIXME:这里要修改namespace
  namespace: 'example',

  state: {
    text: 'page work',
    list: []
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/example') {
          dispatch({
            type: 'fetch'
          })
        }
      });
    }
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      yield put({
        type: 'save', payload: {
          text: 'page init'
        }
      });
    },
    *delete({ payload }, { call, put }) {
      yield put({
        type: 'save', payload: {
          list: []
        }
      });
    },
    *update({ payload }, { call, put, select }) {
      const data = yield call(pageService.query, payload);
      if (data) {
        yield put({
          type: 'save',
          payload: {
            list: data.data
          },
        })
      }
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
