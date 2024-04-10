import { format, parseISO, subDays } from "date-fns";

import {
    ResponsiveContainer,
    AreaChart,
    XAxis,
    YAxis,
    Area,
    Tooltip,
    CartesianGrid,
  } from "recharts";

const Statistics = ({ data }) => {

    const CustomTooltip = ({ active, payload, label }) => {
            if (active) {
              return (
                <div className="tooltip">
                  <h4>Hours</h4>
                  <p>{payload} hr</p>
                </div>
              );
            }
            return null;
        }
        
        return (
        <ResponsiveContainer width="80%" height={400} className="responsiveContainer">
            <AreaChart  data={data}>
                <CartesianGrid opacity={0.4} vertical={false} />
            <defs>
              <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
                <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
              </linearGradient>
            </defs>
    
            <Area type="monotone" dataKey="hours" stroke="#2451B7" fill="url(#color)" />
    
            <XAxis
              dataKey="date"
              tickLine={false}
              tickFormatter={(str) => {
                const date = parseISO(str);
                if (date.getDate() % 3 === 0) {
                  return format(date, "MMM, d");
                }
                return "";
              }}
            />
    
            <YAxis
              datakey="hours"
              axisLine={false}
              tickLine={false}
              tickCount={10}
              tickFormatter={(number) => `${number.toFixed(2)} hr`}
            />
    
            <Tooltip  />
    
          </AreaChart>
        </ResponsiveContainer>
      );
}



export default Statistics;