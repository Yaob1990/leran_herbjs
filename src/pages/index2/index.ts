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
  plus() {
    this.commit('plus');
  },
  minus() {
    this.commit('minus');
  },
  multiply() {
    console.log('multiply');

    this.dispatch('multiplyAsync');
  },
});
