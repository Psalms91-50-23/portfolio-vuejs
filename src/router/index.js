import { createRouter, createWebHistory } from 'vue-router';
import { ProjectDetails, Home, Projects, Contact } from '../views';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  },
  {
    path: '/projects/:project',
    name: 'ProjectDetails',
    component: ProjectDetails,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },

];

const router = createRouter({
  history: createWebHistory(import.meta.env.VUE_APP_BASE_URL),
  routes,
});

export default router;