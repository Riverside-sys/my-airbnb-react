import { Navigate } from 'react-router-dom'

import Home from '@/views/home'
import Detail from '@/views/detail'
import Entire from '@/views/entire'
import Demo from '@/views/demo'

const routes = [
  {
    path: '/',
    element: <Navigate to='/home' />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/detail',
    element: <Detail />
  },
  {
    path: '/entire',
    element: <Entire />
  },
  {
    path: '/demo',
    element: <Demo />
  }
]

export default routes