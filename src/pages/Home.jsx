import { useState } from 'react'
import Hero from '../pages/Hero'
import Creation from '../pages/Creation'
import About from '../pages/About'
import Decors from '../pages/Decor'
import Technology from '../pages/Technology'
import Contact from './Contact'
import Nav from '../components/layout/Nav'
import Message from './Message'
import Footer from './Footer'
import usePageTracking from '../hooks/usePageTracking';

function Home() {
    usePageTracking();

    const [heroComplete, setHeroComplete] = useState(false);
    const handleHeroComplete = () => {
        setHeroComplete(true);
    };

    const localNavigation = [{ label: "hello", link: "hero" }, { label: "creation", link: "creation" }, { label: "about", link: "about" }, { label: "contact", link: "message" }];
    const navigation = [{ label: "invoke", link: "/invoke" }];
    return (
        <>
            <Hero onAnimationComplete={handleHeroComplete} />
            <Creation />
            <About />
            <Technology />
            <Message />
            <Footer />

            {heroComplete && <Nav ids={localNavigation} pages={navigation} />}
            {heroComplete && <Contact />}
            {heroComplete && <Decors />}
        </>
    );
}

export default Home;
