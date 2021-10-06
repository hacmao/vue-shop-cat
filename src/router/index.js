import HomePage from '@/view/HomePage'

const routes = [{
    path: '/',
    component: HomePage,
    children: [{
        path: '/home',
        component: HomePage
    }]
}]

export default routes;