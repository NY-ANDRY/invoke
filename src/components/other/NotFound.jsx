import Matrix from "../boxEffect/Matrix";

const NotFound = () => {

    return (
        <>
            <div id="notFound" className="flex-center flex-1 w-full h-full pb-20 text-xl">
                <Matrix speed={50}>Not Found</Matrix>
            </div>
        </>
    );
}

export default NotFound;