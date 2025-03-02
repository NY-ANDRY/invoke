import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import gsap from "gsap";
import Matrix from "../boxEffect/Matrix";

const BtnNav = ({ id, page, show }) => {
    const [selected, setSelected] = useState(false);
    const txtRef = useRef(null);
    const rectRef = useRef(null);
    const arrowRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (!page) {
            const target = document.getElementById(id?.link);
            if (target) {
                const observer = new IntersectionObserver(([entry]) => setSelected(entry.isIntersecting), { rootMargin: "-100px 0px", threshold: 0 });
                observer.observe(target);
                return () => observer.unobserve(target);
            }
        }
    }, []);

    useEffect(() => {
        gsap.to(txtRef.current, { width: selected || show ? "auto" : 0, duration: 0.4, ease: "power4.out" });
    }, [selected, show]);

    const handleClick = () => {
        if (id?.link) document.getElementById(id.link)?.scrollIntoView({ behavior: "smooth", block: "start" });
        else if (page?.link) navigate(page.link);
    };

    const enterAnimation = {
        rect: { opacity: 0, x: 8, duration: 0.4, ease: "power4.out" },
        arrow: { opacity: 1, width: "auto", x: 8, duration: 0.4, ease: "power4.out" }
    };

    const leaveAnimation = {
        rect: { opacity: 1, x: 0, duration: 0.4, ease: "power4.out" },
        arrow: { opacity: 0, width: 0, x: 0, duration: 0.4, ease: "power4.out" }
    };

    const animate = (rect, arrow) => {
        gsap.to(rectRef.current, rect);
        gsap.to(arrowRef.current, arrow);
    };

    return (
        <div onClick={handleClick}
            onMouseEnter={() => animate(enterAnimation.rect, enterAnimation.arrow)}
            onMouseLeave={() => animate(leaveAnimation.rect, leaveAnimation.arrow)}
            className="flex h-3 capitalize items-center cursor-pointer">
            <div ref={txtRef} className="section-name w-0 overflow-hidden">
                <span className="pr-3"><Matrix speed={60}>{id?.label || page?.label}</Matrix></span>
            </div>
            <span className="nav-svg flex items-center">
                <svg ref={arrowRef} className="w-0 opacity-0 left-3" width="12" height="12" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.8 2H0.2C0.089543 2 0 2.08954 0 2.2V3.8C0 3.91046 0.0895429 4 0.2 4H4.8C4.91046 4 5 4.08954 5 4.2V5.51716C5 5.69534 5.21543 5.78457 5.34142 5.65858L7.85858 3.14142C7.93668 3.06332 7.93668 2.93668 7.85858 2.85858L5.34142 0.341421C5.21543 0.215428 5 0.304662 5 0.482843V1.8C5 1.91046 4.91046 2 4.8 2Z" fill="#CCCCCC" />
                </svg>
                <svg ref={rectRef} width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="8" width="8" height="8" rx="1" transform="rotate(90 8 0)" fill="#CCCCCC" />
                </svg>
            </span>
        </div>
    );
};

export default BtnNav;