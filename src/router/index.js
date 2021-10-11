import HomePage from '@/view/HomePage'
import CatDetail from '@/view/CatDetail'

const routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/home',
        component: HomePage
    },
    {
        path: '/cat/:id',
        component: CatDetail
    }
]

export default routes;
