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
  navigateTo(event) {
    const page = event.target.dataset.page;
    my.navigateTo({ url: page });
  },
});
