
const BtnSecondary = ({content, onClick, bg}) => {
    return (
        <div onClick={onClick} className="btn relative flex gap-8 justify-between cursor-pointer transition-all tracking-[2px]">
            <div className="w-full flex flex-col items-center justify-between gap-12">
                <div className="w-1 h-1 border-tl"></div>
                <div className="w-1 h-1 border-bl"></div>
            </div>
            <div  className="btn-text primary flex flex-1 whitespace-nowrap w-auto items-center justify-center z-10 relative bottom-px font-[is-sb]">
                {content ?? "..."}
            </div>
            <div className="w-full flex flex-col items-center justify-between gap-12">
                <div className="w-1 h-1 border-tr"></div>
                <div className="w-1 h-1 border-br"></div>
            </div>
        </div>
    );
}

export default BtnSecondary;