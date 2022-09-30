import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript"; //引入语言
hljs.registerLanguage("javascript", javascript);
import hljsVuePlugin from "@highlightjs/vue-plugin";
import "highlight.js/styles/stackoverflow-light.css";
import "highlight.js/lib/common";
const app = createApp(App);
app.component("hljsVuePlugin", hljsVuePlugin);//全局注册


createApp(App).use(store).use(router).use(router).mount('#app')
