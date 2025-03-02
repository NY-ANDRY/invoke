

const InvokeSpell = ({ one, two, three, spell }) => {

    return (
        <div className="spell flex items-center justify-center gap-2">
            <img src={one} className="invoker-img-sm" width={32} alt="" />
            <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="0.154755" width="2" height="10" rx="1" fill="#DFDFDF" />
                <rect x="10" y="4.15475" width="2" height="10" rx="1" transform="rotate(90 10 4.15475)" fill="#DFDFDF" />
            </svg>
            <img src={two} className="invoker-img-sm" width={32} alt="" />
            <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="0.154755" width="2" height="10" rx="1" fill="#DFDFDF" />
                <rect x="10" y="4.15475" width="2" height="10" rx="1" transform="rotate(90 10 4.15475)" fill="#DFDFDF" />
            </svg>
            <img src={three} className="invoker-img-sm" width={32} alt="" />
            <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="0.154755" width="2" height="10" rx="1" transform="rotate(90 10 0.154755)" fill="#DFDFDF" />
                <rect x="10" y="4.15475" width="2" height="10" rx="1" transform="rotate(90 10 4.15475)" fill="#DFDFDF" />
            </svg>
            <img src={spell} className="invoker-img-sm" width={32} alt="" />
        </div>
    );
}

export default InvokeSpell;