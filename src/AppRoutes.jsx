import { lazy } from 'react';

const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));

const AppRoutes = [
    { path: '/', element: <Home Invoke /> },
    { path: '/home', redirect: "/" },
    { path: '/invoke', redirect: "/" },
    { path: '*', element: <NotFound /> },
];

export default AppRoutes;
