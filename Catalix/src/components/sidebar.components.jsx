import logo from "../assets/logo.svg";
import home from "../assets/home.svg";
import timer from "../assets/timer.svg";
import chart from "../assets/chart.svg";
import transform from "../assets/transform.svg";
import library from "../assets/library.svg";
import left from "../assets/left.svg";
import logout from "../assets/logout.svg";
import settings from "../assets/settings.svg";

import SidebarTab from "./sidebarTab.components";

import { useState } from "react";

const Sidebar = () => {

    const [ activeTab, setActiveTab ] = useState(2);

    const navText = ["Home", "Activities", "Analytics", "Transform", "Library"];
    const navLogo = [home, timer, chart, transform, library];

    const controlText = ["Settings", "Logout"];
    const controlLogo = [settings, logout];

    return (
        <div className='sidebarFrame'>
        <div className='sidebar'>

            {/* Sidebar icon */}

            <div className="sidebarIcon">
                <div className="leftCircle">
                     <div className="left">
                        <img src={left} alt="" className="leftVector" />
                     </div>
                </div>
            </div>

            {/* Logo */}

          <div className='logo'>
            <div className="logoIcon">
              <div className="icon">
                <div className="box">
                    <img src={logo} alt="" className="logoVector" />
                </div>
              </div>    
            </div>

            <h1 className="logoText">Catalix</h1>
          </div>

            {/* Navigation panel */}

            <div className="navPanel">

                {/* Nav Panel Tab */}

                {
                    navText.map((text, i) => {
                        return <SidebarTab image={navLogo[i]} text={navText[i]} isActive={activeTab == i ? true : false} />
                    })
                }
            </div>
            
            {/* Controls panel */}
                
            <div className="controlsPanel">
                {
                    controlText.map((text, i) => {
                        return <SidebarTab image={controlLogo[i]} text={text} />
                    })
                }
            </div>

        </div>
      </div>
    )
}

export default Sidebar;