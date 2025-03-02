import Matrix from "../components/boxEffect/Matrix";
import Nav from "../components/layout/Nav";

const NotFound = () => {

    const navigation = [{ label: "home", link: "/home" }];

    return (
        <>
            <div id="notFound" className="flex-center w-full h-[100vh] pb-20 text-xl">
                <Matrix speed={50}>Not Found</Matrix>
            </div>
            <Nav pages={navigation} show={true} />
        </>
    );
}

export default NotFound;