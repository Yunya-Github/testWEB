import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 配置全局样式 @ 符号，代指src路径
import '@/assets/css/global.css'
// 配置全局自定义设置
import settings from '@/assets/js/settings'
import axios from 'axios' //导入安装的axios
//vue-cookies配置
import cookies from 'vue-cookies'
//ElementUI的配置
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//bootstrap配置
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// vue-video-player配置
import VideoPlayer from 'vue-video-player'

Vue.config.productionTip = false
// 在所有需要与后台交互的组件中：this.$settings.base_url + '再拼接具体后台路由'
Vue.prototype.$settings = settings;
//相当于把axios这个对象放到了vue对象中，以后用vue对象.$axios
Vue.prototype.$axios = axios;
Vue.prototype.$cookies = cookies;

// 扩展element-ui插件
Vue.use(ElementUI);
// vue-video-player配置
require('video.js/dist/video-js.css');
require('vue-video-player/src/custom-theme.css');
Vue.use(VideoPlayer);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
