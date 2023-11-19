import MyJob from "./MyJob";
import jobsController from "../../controllers/JobsControllers";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


export default function MyJobs() {
    const controller = jobsController();
// Use effect
    useEffect(() => {
        controller.fetchMyJobs();
    }, []);

    // Use effect
    

    let { jobId } = useParams();

    
        useEffect( () => {
            if (jobId) {
                controller.filterJobs(jobId);
                
                
                
                
            } else  {
                controller.fetchJobs();
            }
        }, []);

    return (
        

    
    <div>
        <h2>My Jobs:</h2>
        {controller.myJobs &&
        controller.myJobs.map((job) => {
            return  <MyJob job={job} key={job._id} />; 
            

        
        })}
        
        
    </div>
    );
}