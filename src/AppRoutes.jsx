import { lazy } from 'react';

const Home = lazy(() => import('./pages/Home'));
const Stat = lazy(() => import('./pages/Statistics'));
const Profile = lazy(() => import('./pages/Profile'));
const About = lazy(() => import('./pages/About'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));

const AppRoutes = [
    { path: '/', element: <Home /> },
    { path: '/home', redirect: "/" },
    { path: '/invoke', redirect: "/" },
    { path: '/stat', element: <Stat /> },
    { path: '/profile/:id', element: <Profile /> },
    { path: '/about', element: <About /> },
    { path: '*', element: <PageNotFound /> },
];

export default AppRoutes;
