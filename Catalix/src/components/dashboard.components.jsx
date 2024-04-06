import TextField from "./textField.components";
import TopStats from "./topStats.components";
import UserControls from "./userControls.components";
import UserOptions from "./userOptions.components";

const Dashboard = () => {
    return (
        <div className="dashboardFrame">
            <div className="dashboard">

                <div className="panel">
                    <TextField />

                    <UserControls />
                </div>

                <UserOptions />

                <TopStats />

                <div className="middleStats">

                </div>

                <div className="lowerStats">

                </div>

            </div>
        </div>
    )
}

export default Dashboard;