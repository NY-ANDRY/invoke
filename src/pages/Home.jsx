import usePageTracking from '../hooks/usePageTracking';
import Invoke from '../Invoke/Invoke';
import Nav from '../components/layout/Nav';

function Home() {
    usePageTracking();

    const localNavigation = [{ label: "hello", link: "hero" }, { label: "creation", link: "creation" }, { label: "about", link: "about" }, { label: "contact", link: "message" }];
    const navigation = [{ label: "home", link: "/" }];

    return (
        <>
            {/* <Nav pages={navigation} /> */}
            <Invoke />
        </>
    );
}

export default Home;
