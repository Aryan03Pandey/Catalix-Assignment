const TopStatsCard = ({ path, title, bgCSS, subTitle, figure, arrow, base, percentage, currencyAmt, currency }) => {
    return (
        <div className="quotation">
            <h1 className="title">{title}</h1>
            <h3 className="subtitle">{subTitle}</h3>
            
            <h1 className="figure">{figure}</h1>

            <img src={arrow} alt="" className="arrow" />

            <h3 className="base">{base}</h3>
            <h3 className="percentage">{'(' + percentage + '%'+')'}</h3>

            <p className="currencyAmt">{currencyAmt}</p>
            <p className="currency">{currency}</p>
        </div>
    )
}

export default TopStatsCard;