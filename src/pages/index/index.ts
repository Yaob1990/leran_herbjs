import { Page } from 'herbjs';
import { IPageStore } from './store';

interface IPageState {
  num: number;
}

interface IPageMethods {
  init(): void;
}

Page<IPageState, IPageMethods, IPageStore>({
  onLoad(options) {
    this.init();
  },
  data: {
    num: 0,
  },
  onReady() {},
  onShow() {},
  onHide() {},
  onUnload() {},
  init() {
    this.dispatch('beforeRender');
  },
  plus() {
    this.setData({
      num: ++this.data.num,
    });
  },
  minus() {
    this.setData({
      num: --this.data.num,
    });
  },
});
