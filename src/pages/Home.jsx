import usePageTracking from '../hooks/usePageTracking';
import Invoke from '../Invoke/Invoke';
import Footer from './Footer';
import Nav from '../components/layout/Nav';

function Home() {
    usePageTracking();

    const localNavigation = [{ label: "hello", link: "hero" }];
    const navigation = [{ label: "home", link: "/" }];

    return (
        <>
            {/* <Nav pages={navigation} /> */}
            <Invoke />
        </>
    );
}

export default Home;
