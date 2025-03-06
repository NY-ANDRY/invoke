

const Filtre1 = ({ selected }) => {
    const fillColor = ["#6A6A6C", "#fefefe"];

    return (
        <svg className="cursor-pointer" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="transition-all" d="M3.21213 0.787868C3.09497 0.670711 2.90503 0.670711 2.78787 0.787868L0.87868 2.69706C0.761522 2.81421 0.761522 3.00416 0.87868 3.12132C0.995837 3.23848 1.18579 3.23848 1.30294 3.12132L3 1.42426L4.69706 3.12132C4.81421 3.23848 5.00416 3.23848 5.12132 3.12132C5.23848 3.00416 5.23848 2.81421 5.12132 2.69706L3.21213 0.787868ZM3.3 11V1H2.7V11H3.3Z" fill={selected ? fillColor[1] : fillColor[0]} />
            <path className="transition-all" d="M8.78787 11.2121C8.90503 11.3293 9.09497 11.3293 9.21213 11.2121L11.1213 9.30294C11.2385 9.18579 11.2385 8.99584 11.1213 8.87868C11.0042 8.76152 10.8142 8.76152 10.6971 8.87868L9 10.5757L7.30294 8.87868C7.18579 8.76152 6.99584 8.76152 6.87868 8.87868C6.76152 8.99584 6.76152 9.18579 6.87868 9.30294L8.78787 11.2121ZM9.3 11V1H8.7V11H9.3Z" fill={selected ? fillColor[1] : fillColor[0]} />
        </svg>

    )
}

export default Filtre1;