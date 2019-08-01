import ToastComponent from './index.vue';

const Toast = {};

Toast.install = function (Vue) {
  const ToastConstructor = Vue.extend(ToastComponent);
  const instance = new ToastConstructor();
  instance.$mount(document.createElement('div'));
  document.body.appendChild(instance.$el);
  Vue.prototype.$toast = (msg, duration = 3000, type = 'spread') =>{
    instance.text = msg;
    instance.status = true;
    instance.duration = duration;
    instance.type = type;
    clearTimeout(instance.timer);
    instance.timer = setTimeout(() =>{
      instance.status = false;
      instance.text = '';
      clearTimeout(instance.timer);
    }, duration);
  };
}
export default Toast;