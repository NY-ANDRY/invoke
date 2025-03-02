import { useEffect, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import AppRoutes from './AppRoutes';
import Loading from './pages/Loading';
import { Analytics } from "@vercel/analytics/react"

gsap.registerPlugin(ScrollTrigger);

const App = () => {

    useEffect(() => {
        if (typeof window !== "undefined" && window.ResizeObserver) {
            const ro = new ResizeObserver(() => {
                ScrollTrigger.refresh();
            });
            ro.observe(document.documentElement);
            return () => ro.disconnect();
        }
    }, []);

    return (
        <>
            <Analytics />
            <Suspense fallback={<Loading />}>
                <Routes>
                    {AppRoutes.map(({ path, element, redirect }) =>
                        redirect ? (
                            <Route key={path} path={path} element={<Navigate to={redirect} replace />} />
                        ) : (
                            <Route key={path} path={path} element={element} />
                        )
                    )}
                </Routes>
            </Suspense>
        </>
    );
}

export default App;
