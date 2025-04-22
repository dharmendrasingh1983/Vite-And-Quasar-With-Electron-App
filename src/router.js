import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component: ()=> import("./components/HelloWorld.vue") },
  { path: '/download', component: ()=> import("./components/download.vue") }
]
export default createRouter({
  history: createMemoryHistory(),
  routes,
});
