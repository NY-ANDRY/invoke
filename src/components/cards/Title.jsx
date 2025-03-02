import { useEffect, useRef } from "react";
import gsap from "gsap";

const Title = ({ txt, onClick }) => {

  const divRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      divRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power4.out",
        scrollTrigger: {
          trigger: divRef.current,
          start: "top 80%",
          end: "bottom 0%",
          toggleActions: "play reverse restart reverse",
        },
      }
    );
  }, []);

  return (
    <div className="pb-4">
      <div ref={divRef} onClick={onClick} className="title bg-primary pt-2 pb-2 pl-6 pr-6 rounded-xs">
        <div className="title-txt font-[is-b] secondary text-[28px] tracking-[3px] ">
          {txt ?? "..."}
        </div>
      </div>
    </div>
  )
}

export default Title;