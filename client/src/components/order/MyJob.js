import jobsController from "../../controllers/JobsControllers";
import { useNavigate } from "react-router-dom";

export default function MyJob({ job }) {
    const controller = jobsController();
    const navigate= useNavigate();
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
    const deleteMyJob= async (e) => {
        e.preventDefault();
        try
        {

            controller.deleteJob(e);
            
            navigate ("/");
        }
        catch(e){
            console.log(e)
        }
    }
    const viewMyJob= async (e) => {
        e.preventDefault();
        try
        {

            
            navigate ("/job/" + e.target.id);

        }
        catch(e){
            console.log(e)
        }
    }
    
    
    

    const jobTaker = job.taker != [];
     return (
    <div className= "nav justify-content-center" key={job._id}>
        <div className="form-control mb-2">
        <p> Tittle :{job.title}</p>
        <p>Description :{ job.description}</p>
        <p>Location :{job.location}</p>
        <p>Location :{job.taker}</p>
        {jobTaker ? (<span></span>) : (<span></span>)}

        <button className="btn btn-primary mb-2" id={job._id} onClick={viewMyJob} >View</button>
        <button className="btn btn-primary mb-2" id={job._id} onClick={deleteMyJob} >Done</button>
        
        
    </div>
        
        
    </div>
    );
}