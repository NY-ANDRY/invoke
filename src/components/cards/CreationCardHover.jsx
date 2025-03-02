
const Creation = ({ date, title, txt }) => {


    return (
        <div className="cch flex flex-col relative p-3 gap-2 max-h-full h-full overflow-hidden overflow-y-auto">
            <div className="cch-1 flex items-center justify-end text-xs tracking-[1.4px] uppercase">
                <div className="cch-date p-1.5 pl-3 pr-3 rounded-sm">
                    {date ?? "February 2025"}
                </div>
            </div>
            <div className="cch-1 flex items-center tracking-[1.4px] mt-2">
                <div className="cch-title p-1.5 pl-3 pr-3 rounded-sm">
                    {title ?? "Site de partage"}
                </div>
            </div>
            <div className="cch-1 flex items-center tracking-[1.4px]">
                <div className="cch-txt p-1.5 pl-3 pr-3 rounded-sm">
                    {txt ?? "Site de partage pour partager et commenter des images, vidéos et documents."}
                </div>
            </div>
        </div>
    );
}

export default Creation;