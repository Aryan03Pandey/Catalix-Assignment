import {
    ResponsiveContainer,
    AreaChart,
    XAxis,
    YAxis,
    Area,
    Tooltip,
    CartesianGrid
} from "recharts";

import { Link } from "react-router-dom";

import Chart from "./charts";

const TopStatsCard = ({ data, title, subTitle, figure, arrow, base, percentage, currencyAmt, currency, bgClass, stroke, fill }) => {
    
    return (
        <Link to="/stats">
        <div className={"quotation " + bgClass}>
            <h1 className="title">{title}</h1>
            <h3 className="subtitle">{subTitle}</h3>
            
            <div className="figureFlex">
                <h1 className="figure">{figure}</h1>

                <img src={arrow} alt="" className="arrow" />
            </div>

            <h3 className="base">{base + ' (' + percentage + '%'+')'}</h3>

            <p className="currencyAmt">{currencyAmt + " " + currency}</p>

            {/* <img src={path} alt="" className="path" /> */}
            <Chart info={data} stroke={stroke} fill={fill} />
        </div>
        </Link>
    )
}

export default TopStatsCard;