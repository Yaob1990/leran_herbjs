import { Page } from 'herbjs';
import { IPageStore } from './store';

interface IPageData {}

interface IPageMethods {
  init(): void;
}

/**
 * Generics
 * @example
 *    Page<PageData, PageMethods, PageStore, AppStore>
 */
Page<IPageData, IPageMethods, IPageStore>({
  onLoad(options) {},
  onReady() {},
  onShow() {},
  onHide() {},
  onUnload() {},
  init() {
    this.dispatch('actionA', 'payload');
  },
  data: {
    num: 0,
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
