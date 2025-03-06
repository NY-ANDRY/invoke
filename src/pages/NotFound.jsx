import Matrix from "../components/boxEffect/Matrix";

const NotFound = () => {

    return (
        <>
            <div id="notFound" className="flex-center w-full h-[100vh] pb-20 text-xl">
                <Matrix speed={50}>Not Found</Matrix>
            </div>
        </>
    );
}

export default NotFound;