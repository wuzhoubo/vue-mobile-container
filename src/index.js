import VueMobileContainer from './vue-mobile-container';

VueMobileContainer.install = Vue => Vue.component(VueMobileContainer.name, VueMobileContainer);

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default VueMobileContainer;
