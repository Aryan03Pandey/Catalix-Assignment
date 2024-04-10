import TopStatsCard from "./topStatsCard.components";

import path1 from "../assets/path1.svg";
import path2 from "../assets/path2.svg";
import path3 from "../assets/path3.svg";
import path4 from "../assets/path4.svg";
import up from "../assets/climbing.svg"
import upBlack from "../assets/upBlack.svg"
import down from "../assets/falling.svg"

import data from "../data/chart1.json"
import data1 from "../data/chart2.json"
import data2 from "../data/chart3.json"
import data3 from "../data/chart4.json"

const TopStats = () => {
    

    return (
        <div className="topStats">
            <TopStatsCard 
                // path={path1}
                data={data}
                title="efficiency"
                subTitle="Lorem Ipsum"
                figure="1.1921"
                arrow={down}
                base="+0.0015"
                percentage="+0.13"
                currencyAmt="0.00"
                currency="USD"
                bgClass="card1"
                stroke="#539BBB"
                fill="#83b4db"
            />
            
            <TopStatsCard 
                // path={path2}
                data={data1}
                title="time to market"
                subTitle="Lorem Ipsum"
                figure="327,176"
                arrow={up}
                base="-97,914.00"
                percentage="-23.03"
                currencyAmt="131,040,723,108"
                currency="JPY"
                bgClass="card2"
                stroke="#16b4f7"
                fill="#055f59"
            />
            
            <TopStatsCard 
                // path={path3}
                data={data2}
                title="tech debt"
                subTitle="Lorem Ipsum"
                figure="1.1763"
                arrow={upBlack}
                base="+0.0015"
                percentage="+0.13"
                currencyAmt="0.00"
                currency="USD"
                bgClass="card3"
                stroke="#ffa6a8"
                fill="#ffe1e3"
            />
            
            
            <TopStatsCard 
                //  path={path4}
                data={data3}
                 title="predictability"
                 subTitle="Lorem Ipsum"
                 figure="0.00313010"
                 arrow={down}
                 base="-0.0005"
                 percentage="-13.88"
                 currencyAmt="1,566"
                 currency="BTC"
                 bgClass="card4"
                stroke="#de373a"
                fill="#ee4346"
            />
        </div>
    )
}

export default TopStats;