import Vue from 'vue'
import Router from 'vue-router'

// VUI
import { Base } from './components/'

// demos
import Home from './demos/Home'
import Buttons from './demos/Buttons'
import Column from './demos/Column'
import Grid from './demos/Grid'
import Modal from './demos/Modal'
import List from './demos/List'
import Contacts from './demos/Contacts'
import Form from './demos/Form'
import Tab from './demos/Tab'
import Scroll from './demos/Scroll'
import Popup from './demos/Popup'
import Preloader from './demos/Preloader'
import Actions from './demos/Actions'
import Toast from './demos/Toast'

Vue.use(Router)

let App = Vue.extend({
  components: {
    Base
  }
})

let router = new Router({
  history: true,
  root: '/vue-mobile'
})

router.map({
  '/': {
    name: 'home',
    component: Home
  },
  '/buttons': {
    component: Buttons
  },
  '/column': {
    component: Column
  },
  '/grid': {
    component: Grid
  },
  '/modal': {
    component: Modal
  },
  '/list': {
    component: List
  },
  '/contacts': {
    component: Contacts
  },
  '/form': {
    component: Form
  },
  '/tab': {
    component: Tab
  },
  '/scroll': {
    component: Scroll
  },
  '/popup': {
    component: Popup
  },
  '/preloader': {
    component: Preloader
  },
  '/toast': {
    name: 'toast',
    component: Toast
  },
  '/actions': {
    component: Actions
  }
})

router.start(App, '#app')
