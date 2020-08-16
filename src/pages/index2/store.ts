import { Store } from 'herbjs';

interface IPageState {
  num: number;
}

interface IPageGetters {
  desc: string;
}

interface IPageMutations {
  plus(state, payload: string): any;
  minus(state, payload: string): any;
  multiply(state, payload: string): any;
}

interface IPageActions {
  multiplyAsync(o, payload: string): Promise<any>;
}

export interface IPageStore {
  state: IPageState;
  getters: IPageGetters;
  mutations: IPageMutations;
  actions: IPageActions;
}

Store<IPageState, IPageGetters, IPageMutations, IPageActions>({
  state: {
    num: 0,
  },
  // 全局 Getter 可以被 App、Page、Component 都能访问到
  // 页面 Getter 只能被当前 Page 和 当前 Page 内的 Component 访问到
  getters: {
    desc: ({ state, getters }) => {
      if (state.num > 0) {
        return '正值';
      } else if (state.num < 0) {
        return '负值';
      } else {
        return '零';
      }
    },
  },
  mutations: {
    plus(state) {
      state.num = ++state.num;
    },
    minus(state) {
      state.num = --state.num;
    },
    multiply(state) {
      state.num = state.num * 10;
    },
  },
  actions: {
    async multiplyAsync({ state, commit, dispatch }, payload) {
      setTimeout(() => {
        commit('multiply');
      }, 5000);
    },
  },
});
