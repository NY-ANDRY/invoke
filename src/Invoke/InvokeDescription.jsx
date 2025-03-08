

const InvokeDescription = ({ description }) => {

    return (
        <>
            <div className="flex relative w-full lg:w-2/3">
                <div className="flex justify-center flex-col lg:flex-row items-center gap-12">
                    <img src={description.image} className="invoker-img-lg h-[86px] lg:h-auto transform" alt="" />
                    <div className="flex flex-col justify-between h-full gap-2 pt-0 pb-0 lg:pt-2 lg:pb-2">
                        <div className="text-xl lg:text-3xl">{description.description.name}</div>
                        <div className="text-sm lg:text-base color-primary">{description.description.description}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default InvokeDescription;