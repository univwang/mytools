import { createRouter, createWebHistory } from 'vue-router'
import MyTool1 from "@/components/MyTool1"
import MyTool2 from "@/components/MyTool2"
import MyTool3 from "@/components/MyTool3"
import NotFound from "@/components/NotFound"
import MyTool1Show from "@/components/MyTool1Show"
const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/tool1/"
  },
  {
    path: "/tool1/",
    name: "my_tool1",
    component: MyTool1,
  },
  {
    path: "/tool1/:catchAll(.*)*",
    name: "my_tool1_show",
    component: MyTool1Show,
  },
  {
    path: "/tool2/",
    name: "my_tool2",
    component: MyTool2,
  },
  {
    path: "/tool3/",
    name: "my_tool3",
    component: MyTool3,
  },
  {
    path: "/404/",
    name: "404",
    component: NotFound
  },
  {
    path: "/:catchAll(.*)*",
    name: "error",
    redirect: "/404/"
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
