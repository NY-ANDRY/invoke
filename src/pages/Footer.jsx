

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <>
            <footer className="flex justify-between mt-10 pb-7 pl-10 pr-10 txt-80 text-sm">
                <div className="footer-item ">Developped by  NY ANDRY Paul Ferdinah</div>
                <div className="footer-item ">All rights reserved © {year}</div>
            </footer>
        </>
    )
}

export default Footer;