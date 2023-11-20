import jobsController from "../../controllers/JobsControllers";
import { useNavigate, useParams } from "react-router-dom";
import userController from "../../controllers/userController";
import { useEffect } from "react";

export default function Job() {
    const controller = jobsController();
    const uController = userController();
    const navigate= useNavigate();
    let jobId = useParams();
    
    useEffect( () => {
        if (jobId) {
            controller.filterJobs(jobId);  
        }
    }, []);

    const assignJob= async (e) => {
        e.preventDefault();
        try
        {

            controller.assignJob(e);
            
            navigate ("/");
        }
        catch(e){
            console.log(e)
        }
    }
    
    return (
       <>
       {controller.jobs &&
            controller.jobs.map((job) => { 
                return <div className= "nav justify-content-center" key={job._id}>
        <div className="form-control mb-2">
        <p> Title :{job.title}</p>
        <p>Description :{ job.description}</p>
        <p>Location :{job.location}</p>
        <p>Posted by :{job.user[0].firstName}</p>
        

        <button className="btn btn-primary mb-2" id={job._id} onClick={assignJob} >Add</button>
        
            
            
        
        
        
    </div>
        
        
    </div>})}
    </>
    );
}