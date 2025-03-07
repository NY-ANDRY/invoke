

const InvokeDescription = ({ description }) => {

    return (
        <>
            <div className="flex relative w-2/3">
                <div className="flex gap-12">
                    <img src={description.image} className="invoker-img-lg transform" alt="" />
                    <div className="flex flex-col justify-between pt-2 pb-2">
                        <div className="text-3xl">{description.description.name}</div>
                        <div className="color-primary">{description.description.description}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default InvokeDescription;