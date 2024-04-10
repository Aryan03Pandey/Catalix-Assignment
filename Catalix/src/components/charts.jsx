import {
    ResponsiveContainer,
    AreaChart,
    XAxis,
    YAxis,
    Area,
    Tooltip,
    CartesianGrid
} from "recharts";


const Chart = ({ info, stroke, fill }) => {
    return (
        <ResponsiveContainer width="100%" height={150} className="rechartMine" >
            <AreaChart margin={{ top: 0, left: 0, right: 0, bottom: 0 }} data={info["data"]}>
                <Area type="monotone" dataKey="hours" stroke={stroke} fill={fill} />
            </AreaChart>
        </ResponsiveContainer>
    )
}

export default Chart;