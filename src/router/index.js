import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TodoList from '../views/TodoList.vue'
import IssueList from '../views/IssueList.vue'
import TodosIssues from '../views/TodosIssues.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/todo-list',
    name: 'TodoList',
    component: TodoList
  },
  {
    path: '/issue-list',
    name: 'IssueList',
    component: IssueList
  },
  {
    path: '/todos-issues',
    name: 'TodosIssues',
    component: TodosIssues
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
