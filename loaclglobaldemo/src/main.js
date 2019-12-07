import Vue from 'vue'
import App from './App.vue'
// import ChildComponent from './components/ChildComponent.vue'
// import MyArticle from './components/MyArticle.vue'

Vue.config.productionTip = false

// 전역 컴포넌트는 등록해줘야 함. kebab-Casing으로 작성
// 단점. binding해야 할 태그가 없음 결국 App.vue으로
// Vue.component('child-component', ChildComponent);
// Vue.component('my-article', MyArticle);

new Vue({
  render: h => h(App),
}).$mount('#app')
