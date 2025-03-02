import { useRef, useEffect } from "react";
import gsap from "gsap";
import SendMessage from "../components/form/SendMessage";
import ScrollFadeIn from "../components/boxEffect/ScrollFadeIn";

const Message = ({ }) => {
    const interoRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(interoRef.current, {
            x: -0,
            y: -0,
            rotateY: -5,
        }, {
            x: 4,
            y: 0,
            rotateZ: 10,
            yoyo: true,
            duration: 2.4,
            repeat: -1,
            ease: "power4.inOut",
        });
    }, []);

    return (
        <>

            <section id="message" className="flex font-[inter] flex-col items-center min-h-[800px] pb-[102px] relative">
                <ScrollFadeIn top={80}>
                    <div className="message flex flex-col items-center">

                        <p className="txt-60 text-sm">that's all for me :D</p>
                        <div className="flex relative gap-3 txt-80 text-2xl mt-1.5 mb-16">
                            <p>How about you</p>
                            <svg ref={interoRef} className="absolute right-[-32px]" width="18" height="32" viewBox="0 0 21 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.59876 25.2255L3.6517 25.0279C4.23541 22.9373 4.90199 21.3277 5.65144 20.1992C6.40089 19.0706 7.26273 18.2251 8.23696 17.6626C9.21119 17.1001 10.3229 16.6392 11.5721 16.2798C12.3256 16.0582 13.0324 15.7476 13.6924 15.348C14.3553 14.9374 14.9306 14.415 15.4181 13.781C15.9166 13.1499 16.282 12.4007 16.5144 11.5336C16.8026 10.4579 16.8002 9.45728 16.507 8.53168C16.2139 7.60609 15.702 6.81602 14.9716 6.16147C14.2411 5.50692 13.3599 5.04142 12.3282 4.76495C11.4281 4.52378 10.511 4.47803 9.57675 4.6277C8.64254 4.77737 7.78819 5.17785 7.01369 5.82913C6.23919 6.48042 5.63451 7.4419 5.19964 8.71359L1.05055 7.60185C1.63835 5.75938 2.54925 4.29172 3.78324 3.19886C5.02821 2.10895 6.46925 1.40686 8.10637 1.09259C9.75447 0.781271 11.4676 0.863841 13.2458 1.3403C15.1776 1.85794 16.7541 2.69211 17.9752 3.8428C19.2072 4.99644 20.0335 6.34723 20.454 7.89518C20.8855 9.44606 20.8718 11.0777 20.413 12.79C20.0894 13.9974 19.6102 15.0396 18.9752 15.9165C18.3513 16.7963 17.5906 17.5278 16.6932 18.1108C15.8068 18.6968 14.8012 19.1568 13.6764 19.4907C12.5488 19.8356 11.6043 20.2648 10.8432 20.7785C10.0849 21.2812 9.45207 21.9528 8.94452 22.7933C8.43697 23.6337 7.98987 24.7316 7.60322 26.0867L7.55028 26.2843L3.59876 25.2255ZM3.09452 35.5373C2.28226 35.3196 1.6632 34.842 1.23733 34.1044C0.811456 33.3667 0.707343 32.5918 0.924986 31.7795C1.14263 30.9673 1.62027 30.3482 2.3579 29.9224C3.09553 29.4965 3.87047 29.3924 4.68272 29.61C5.49498 29.8277 6.11405 30.3053 6.53992 31.0429C6.96579 31.7806 7.0699 32.5555 6.85226 33.3678C6.70814 33.9056 6.43859 34.3628 6.04359 34.7393C5.65957 35.1187 5.20578 35.3854 4.68222 35.5392C4.17257 35.685 3.64334 35.6843 3.09452 35.5373Z" fill="#848EFF" fillOpacity="0.8" />
                            </svg>
                        </div>
                        <div className="txt-80 text-[14px] mb-6">Send me a message at</div>
                        <a href="mailto:nyandrypaulferdinah@gmail.com" className="relative flex-center pl-8 pr-8 pt-3 pb-3 rounded-sm text-white cursor-pointer" style={{ background: "#1138ff" }}>
                            nyandrypaulferdinah@gmail.com
                        </a >
                        <div className="font-[f-m] text-4xl primary mt-24 mb-28">OR</div>

                        <SendMessage />
                    </div>

                </ScrollFadeIn>
            </section>

        </>
    );
}

export default Message;