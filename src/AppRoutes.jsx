import { lazy } from 'react';

const Home = lazy(() => import('./pages/Home'));
const Stat = lazy(() => import('./pages/Statistics'));
const Profile = lazy(() => import('./pages/Profile'));
const About = lazy(() => import('./pages/About'));
const NotFound = lazy(() => import('./pages/NotFound'));

const AppRoutes = [
    { path: '/', element: <Home /> },
    { path: '/home', redirect: "/" },
    { path: '/invoke', redirect: "/" },
    { path: '/stat', element: <Stat /> },
    { path: '/profile', element: <Profile /> },
    { path: '/about', element: <About /> },
    { path: '*', element: <NotFound /> },
];

export default AppRoutes;
