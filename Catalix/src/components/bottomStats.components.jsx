import { useState } from "react";
import StatsColHead from "./statsColHead.components";

import data from "../data/data.json"

import chart1 from "../assets/chart1.svg";
import chart2 from "../assets/chart2.svg";
import chart3 from "../assets/chart3.svg";
import chart4 from "../assets/chart4.svg";
import chart5 from "../assets/chart5.svg";
import chart6 from "../assets/chart6.svg";
import StatsRow from "./statsRow.components";

const BottomStats = () => {

    const duration = ["Today", "Yesterday", "Week", "Month", "Quarter", "Year"];
    const [ selectedDuration, setSelectedDuration ] = useState(3);

    const charts = [chart1, chart2, chart3, chart4, chart5, chart6];

    return (
        <div className="bottomStats">
            <div className="statsTable">
                <div className="statsControl">
                    <div>
                        <select name="views" id="views" className="pageviews">
                            <option value="pageviews" selected>PAGEVIEWS</option>
                            <option value="siteviews">SITE VIEWS</option>
                        </select>
                    </div>

                    <div className="durationControl">
                        <div>
                            {
                                duration.map((d, i) => {
                                    return <button key={i} className={"statsButton " + (i == selectedDuration ? "selectedButton": "") + (i == 0 ? " leftButton " : "") + (i == 5 ? " rightButton " : "") }>{d}</button>
                                })
                            }
                        </div>

                        <div>
                        <select name="period" id="period" className="selectPeriod">
                            <option value="select period" selected>Select Period</option>
                            <option value="siteviews">SITE VIEWS</option>
                        </select>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="tableContainer">
                <table>
                    <thead>
                        <th><h1 className="statsHeadingTitle">Page</h1></th>
                        {

                            Object.keys(data.views).map((view, i) => {
                                return <th>
                                    <StatsColHead key={i} title={view.replaceAll("_", " ")} number={data.views[view]} chart={charts[i]} />
                                </th>
                            })    
                        }
                    </thead>

                    <tbody>
                    {   
                        Object.keys(data.pages).map((page, i) => {
                            return <StatsRow key={i} 
                                pageName={data.pages[page].pageName} 
                                pageViews={data.pages[page].pageViews} 
                                uniqueViews={data.pages[page].uniquePageViews} 
                                avgTime={data.pages[page].avgTimeOnPage} 
                                extrances={data.pages[page].extrances} 
                                exit={data.pages[page].exit} 
                                pageValue={data.pages[page].pageValue} 
                                
                                parentStats={data["views"]}/>
                        })
                    }
                    </tbody>
                </table>
                </div>
            </div>  
        </div>
    )
}

export default BottomStats;