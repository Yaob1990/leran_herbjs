import { Component } from 'herbjs';

interface IComponentData {
  text: string;
}

interface IComponentProps {
  onPlus(): void;
  onMinus(): void;
}

interface IComponentMethods {}

/**
 * Generics
 * @example
 *    Component<Data, Props, Methods, PageStore, AppStore>
 */
Component<IComponentData, IComponentProps, IComponentMethods>({
  mapStateToData: [],
  data: {
    text: 'component',
  },
  props: {
    onPlus: () => {},
    onMinus: () => {},
  },
  didMount() {},
  didUnmount() {},
  methods: {
    plus() {
      this.props.onPlus();
    },
    minus() {
      this.props.onMinus();
    },
  },
});
