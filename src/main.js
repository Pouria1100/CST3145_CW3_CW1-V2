import Vue from 'vue'
import App from './App.vue'

import './assets/main.css'

new Vue({
  render: (h) => h(App)
}).$mount('#app')



if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
      .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(error => {
        console.log('Service Worker registration failed:', error);
      });
  });
}