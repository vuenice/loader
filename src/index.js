import CommonLoader from './CommonLoader.vue';

export { CommonLoader };

export default {
  install(app) {
    app.component('CommonLoader', CommonLoader);
  },
};