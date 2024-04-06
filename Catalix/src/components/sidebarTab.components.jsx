const SidebarTab = ({ image, text, isActive = false }) => {
    return (

        <div className={"navPanelTab " + (isActive ? "navPanelTabActive" : "")}>
            <div className="navLogo">
                <div className="navLogo">
                    <div className="home">
                        <img src={image} alt="" className="homeIcon" />
                    </div>
                </div>
            </div>

            <h1 className="navText">{text}</h1>
        </div>

    )
}

export default SidebarTab;