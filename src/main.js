import Vue from 'vue';
import App from './App';
import Toast from './plugs/toast';

Vue.use(Toast);

/* eslint-disable no-new */
new Vue({
    render: h => h(App)
}).$mount("#app")
  