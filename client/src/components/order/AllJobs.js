import Job from "../../components/order/Job";
import jobsController from "../../controllers/JobsControllers";
import userController from "../../controllers/userController";
import { useEffect } from "react";
import { useParams ,useNavigate} from "react-router-dom";
 


export default function AllJobs() {
    const controller = jobsController();
    const uController = userController();
    const navigate= useNavigate();

// Use effect
    

    
        useEffect( () => {
            controller.fetchJobs();
        }, []);


        const viewJob= async (e) => {
            e.preventDefault();
            try {   
                navigate ("/job/" + e.target.id);
            }
            catch(e){
                console.log(e)
            }
        }
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
        const deleteJob= async (e) => {
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
        const editJob= async (e) => {
            e.preventDefault();
            try {
                navigate ("/job/" + e.target.id + "/edit");
            }
            catch(e){
                console.log(e)
            }
        }

    return (
        

    
    <div>
        <h2>All Jobs:</h2>
        <table className="table">
            <thead>
                <tr>
                <th>Job Title</th>
                <th>Description</th>
                <th>Options</th>
                </tr>
            </thead>
            <tbody>
            
                
                {controller.jobs &&
        controller.jobs.map((job) => {
            return     <tr key={job._id}>
                    <td>{job.title} </td>
                    <td>{ job.description}</td>
                    
                    <td><button className="btn btn-primary mb-2" id={job._id} onClick={assignJob} >Add</button>
                        <button className="btn btn-primary mb-2" id={job._id} onClick={viewJob} >View</button>
                <>
            {uController.userId == job.user[0]._id ? (
                <span>
                    
                    <button className="btn btn-primary mb-2" id={job._id} onClick={editJob} >Edit</button>
                    <button className="btn btn-primary mb-2" id={job._id} onClick={deleteJob} >Cancel</button>
                </span>):null}
            </></td>
                    </tr>
               
                
                 
            
                
        })}
                
            </tbody>
        </table>
        
    </div>
    );
}