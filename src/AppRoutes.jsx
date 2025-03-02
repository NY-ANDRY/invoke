import { lazy } from 'react';

const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Invoke = lazy(() => import('./games/Invoke/Invoke'));

const AppRoutes = [
    { path: '/', element: <Home /> },
    { path: '/home', redirect: "/" },
    { path: '/invoke', element: <Invoke /> },
    { path: '*', element: <NotFound /> },
];

export default AppRoutes;
