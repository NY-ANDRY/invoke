import { useState, useEffect, useMemo } from "react";

const useOnScreen = (ref, threshold = 0.1) => {
    const [onScreen, setOnScreen] = useState(false);

    const observer = useMemo(() => {
        return new IntersectionObserver(([entry]) => {
            setOnScreen(entry.isIntersecting);
        }, { root: null, threshold });
    }, [threshold]);

    useEffect(() => {
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [ref, observer]);

    return onScreen;
};

export default useOnScreen;
