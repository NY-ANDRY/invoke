import { Link } from "react-router-dom";

const About = () => {


    return (
        <section className="flex flex-col w-full h-[100vh] items-center p-5 pt-24 pb-4">
            <div className="flex flex-col w-full lg:w-3xl h-full gap-2">
                <div className="font-[is-m] color-primary text-[15px]">
                    Hello there! Do you know what Dota is? Do you know who Invoker is?
                </div>
                <div className="font-[is] color-secondary text-[15px]">
                    Well, Dota is an online 5v5 MOBA game where each player controls a hero to compete
                    against the opposing team and secure victory. <br />
                    Invoker is one of the many heroes in the game. He has 10 spells, three orbs (Quas, Wex, and Exort),
                    which are used to invoke different abilities, and a unique skill called Invoke that combines the orbs to cast
                    a specific spell based on their current arrangement.
                </div>
                <div className="font-[is-m] color-primary text-[15px] mt-4">
                    Here, you can simulate Invoker’s spellcasting or test your own invocation skills!
                </div>
                <div className="font-[is] color-secondary text-[15px]">
                    You can play a 30-second game where you must cast the correct ability displayed in the center of the screen.
                    If you prefer, you can simply experiment with Invoker's various spell combinations. <br />
                    To save your best score or showcase your skills on the leaderboard, you can connect your Google account
                    to the platform.
                </div>
            </div>
            <div className="flex w-full flex-col lg:flex-row justify-center items-center gap-4 lg:gap-16 p-0 color-primary">
                <div className="by"><Link to={"https://store.steampowered.com/app/570/Dota_2/"}>inspired by dota 2</Link></div>
                <div className="by">
                    <svg width="152" height="32" viewBox="0 0 176 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M150.308 35.9999V1.43994H156.548V35.9999H150.308ZM153.284 35.9999V31.0559H175.172V35.9999H153.284ZM153.284 20.6399V15.7919H173.492V20.6399H153.284ZM153.284 6.38394V1.43994H174.644V6.38394H153.284Z" fill="url(#paint0_linear_538_5)" />
                        <path d="M116.615 35.9999V1.43994H122.855V35.9999H116.615ZM121.127 18.0479L137.495 1.43994H145.895L128.855 18.0479H121.127ZM138.263 35.9999L121.031 18.0479H128.855L146.855 35.9999H138.263Z" fill="url(#paint1_linear_538_5)" />
                        <path d="M95.0661 36.48C92.5701 36.48 90.2661 36.048 88.1541 35.184C86.0421 34.32 84.2021 33.088 82.6341 31.488C81.0981 29.888 79.8981 28 79.0341 25.824C78.2021 23.616 77.7861 21.2 77.7861 18.576C77.7861 15.088 78.5221 12.032 79.9941 9.40796C81.4661 6.75196 83.4981 4.68796 86.0901 3.21596C88.7141 1.71196 91.6901 0.959961 95.0181 0.959961C98.4101 0.959961 101.402 1.71196 103.994 3.21596C106.618 4.68796 108.666 6.75196 110.138 9.40796C111.61 12.064 112.346 15.136 112.346 18.624C112.346 21.248 111.914 23.648 111.05 25.824C110.218 28 109.018 29.888 107.45 31.488C105.914 33.088 104.09 34.32 101.978 35.184C99.8661 36.048 97.5621 36.48 95.0661 36.48ZM95.0181 31.392C97.1941 31.392 99.0981 30.848 100.73 29.76C102.394 28.672 103.69 27.168 104.618 25.248C105.546 23.296 106.01 21.056 106.01 18.528C106.01 16.032 105.546 13.856 104.618 12C103.722 10.112 102.442 8.65596 100.778 7.63196C99.1461 6.57596 97.2261 6.04796 95.0181 6.04796C92.8421 6.04796 90.9221 6.57596 89.2581 7.63196C87.6261 8.65596 86.3621 10.096 85.4661 11.952C84.5701 13.808 84.1221 16 84.1221 18.528C84.1221 21.088 84.5701 23.328 85.4661 25.248C86.3941 27.168 87.6741 28.672 89.3061 29.76C90.9701 30.848 92.8741 31.392 95.0181 31.392Z" fill="url(#paint2_linear_538_5)" />
                        <path d="M57.5071 35.9999L44.7871 1.43994H51.3151L61.7311 31.5839H60.6751L71.0911 1.43994H77.2831L64.6111 35.9999H57.5071Z" fill="url(#paint3_linear_538_5)" />
                        <path d="M12.1182 35.9999V1.43994H19.8462L36.6942 31.4879L34.9182 31.9199V1.43994H40.9662V35.9999H33.2382L16.3902 5.95194L18.1662 5.51994V35.9999H12.1182Z" fill="url(#paint4_linear_538_5)" />
                        <path d="M0.410156 35.9999V1.43994H6.65016V35.9999H0.410156Z" fill="url(#paint5_linear_538_5)" />
                        <defs>
                            <linearGradient id="paint0_linear_538_5" x1="-1.5" y1="0.999997" x2="178" y2="36" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#3D64FF" />
                                <stop offset="0.5" stopColor="#EF3DFF" />
                                <stop offset="1" stopColor="#FF3D3D" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_538_5" x1="-1.5" y1="0.999999" x2="178" y2="36" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#3D64FF" />
                                <stop offset="0.5" stopColor="#EF3DFF" />
                                <stop offset="1" stopColor="#FF3D3D" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_538_5" x1="-1.5" y1="0.999998" x2="178" y2="36" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#3D64FF" />
                                <stop offset="0.5" stopColor="#EF3DFF" />
                                <stop offset="1" stopColor="#FF3D3D" />
                            </linearGradient>
                            <linearGradient id="paint3_linear_538_5" x1="-1.5" y1="0.999999" x2="178" y2="36" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#3D64FF" />
                                <stop offset="0.5" stopColor="#EF3DFF" />
                                <stop offset="1" stopColor="#FF3D3D" />
                            </linearGradient>
                            <linearGradient id="paint4_linear_538_5" x1="-1.5" y1="0.999998" x2="178" y2="36" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#3D64FF" />
                                <stop offset="0.5" stopColor="#EF3DFF" />
                                <stop offset="1" stopColor="#FF3D3D" />
                            </linearGradient>
                            <linearGradient id="paint5_linear_538_5" x1="-1.5" y1="0.999998" x2="178" y2="36" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#3D64FF" />
                                <stop offset="0.5" stopColor="#EF3DFF" />
                                <stop offset="1" stopColor="#FF3D3D" />
                            </linearGradient>
                        </defs>
                    </svg>

                </div>
                <div className="by"><Link to={"https://nyandry.vercel.app/"}>Created by Paul Ferdinah</Link></div>
            </div>
        </section>
    )
}

export default About;