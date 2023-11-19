import { Link } from "react-router-dom";
import Job from "../components/order/Job";
import AllJobs from "../components/order/AllJobs";
import MyJobs from "../components/order/MyJobs";


function HomePage() {
    
    

    return (
        <div className="row">
            <div className="col-md-6">
            <AllJobs />
            </div>
            <div className="col-md-6">
            <MyJobs />
            </div>
        </div>
    );
    }


    export default HomePage;