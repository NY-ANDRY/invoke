import { useState, useEffect, useRef } from "react";

const Matrix = ({ children, speed = 40, interval = 4000 }) => {
    const [displayText, setDisplayText] = useState(children);
    const originalText = useRef(children);
    const intervalRef = useRef(null);
    const enterRef = useRef(true);

    const matrix = (forward = true) => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            setDisplayText(originalText.current);
        }

        const length = originalText.current.length;
        if (length === 0) return;

        let currentIndex = forward ? 0 : length - 1;
        intervalRef.current = setInterval(() => {
            if ((forward && currentIndex >= length) || (!forward && currentIndex < 0)) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
                return;
            }

            setDisplayText((prevText) => {
                return [...originalText.current].map((char, i) =>
                    char === " " ? " " : (forward ? i < currentIndex : i > currentIndex)
                        ? char
                        : String.fromCharCode(65 + Math.floor(Math.random() * 26))
                ).join('');
            });

            currentIndex += forward ? 1 : -1;
        }, speed);
    };

    useEffect(() => {
        const intervalll = setInterval(() => {
            if (enterRef.current) {
                matrix(true);
            } else {
                matrix(false);
            }

            enterRef.current = !enterRef.current;
        }, interval);
        return () => clearInterval(intervalll);
    }, []);

    return (
        <span
            onMouseEnter={() => matrix(true)}
            onMouseLeave={() => matrix(false)}
            style={{
                whiteSpace: "nowrap",
                fontFamily: "monospace"
            }}
        >
            {displayText}
        </span>
    );
};

export default Matrix;
