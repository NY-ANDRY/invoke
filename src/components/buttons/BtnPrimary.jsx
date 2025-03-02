const BtnPrimary = ({ content, onClick, mode }) => {

    const btnClass = "relative flex items-center justify-center w-full h-full pl-12 pr-12  pt-2 pb-2 cursor-pointer";
    const modeClass = mode === undefined || mode === "1" ? "btn-1" : "btn-2";

    return (
        <div onClick={onClick} className={`${btnClass} ${modeClass}`}>
            <div className="btn-text flex items-center whitespace-nowrap justify-center z-10 relative bottom-px tracking-[0.32px] font-[is-b]">
                {content ?? "..."}
            </div>
        </div>
    );
}

export default BtnPrimary;
