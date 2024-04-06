const MiddleStatsCard = ({ title, heading1, value1, heading2, value2, heading3 = "", value3 = "", dot }) => {
    return (
        <div className="middleStatsCard">
            <h1 className="middleStatsTitle">{title}</h1>

            <img src={dot} alt="" className="middleStatsDot" />

            <div className="middleStatsContent">
                <div className="middleStatsHeading">
                    <p className="heading">{heading1}</p>
                    <p className="value">{value1}</p>
                </div>

                <div className="middleStatsHeading">
                    <p className="heading">{heading2}</p>
                    <p className="value">{value2}</p>
                </div>

                <div className="middleStatsHeading">
                    <p className="heading">{heading3}</p>
                    <p className="value">{value3}</p>
                </div>
            </div>
        </div>
    )
}

export default MiddleStatsCard;