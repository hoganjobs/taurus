import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Tabbar, TabbarItem, Swipe, SwipeItem, Lazyload, Image, List, Card, Tag, Cell, CellGroup, NavBar, Icon } from 'vant';

Vue.config.productionTip = false

Vue.use(Button);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Image);
Vue.use(List);
Vue.use(Card);
Vue.use(Tag);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(NavBar);
Vue.use(Icon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
