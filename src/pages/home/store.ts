import { Store } from 'herbjs';

interface IPageState {
  text: string;
}

interface IPageGetters {
  text1: string;
}

interface IPageMutations {
  mutationA(state, payload: string): any;
}

interface IPageActions {
  actionA(o, payload: string): Promise<any>;
}

export interface IPageStore {
  state: IPageState;
  getters: IPageGetters;
  mutations: IPageMutations;
  actions: IPageActions;
}

Store<IPageState, IPageGetters, IPageMutations, IPageActions>({
  state: {
    text: 'Page',
  },
  getters: {
    text1: ({ state, getters }) => '1',
  },
  mutations: {
    mutationA(state, payload) {},
  },
  actions: {
    async actionA({ state, commit, dispatch }, payload) {},
  },
});
