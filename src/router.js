import Actes from './components/acte/Actes'
import Medicaments from './components/medicament/Medicaments'
import VueRouter from 'vue-router'

const routes = [
  { path: '/acte', component: Actes },
  { path: '/medicament', component: Medicaments }
]

const router = new VueRouter({
  routes
})

export default router
