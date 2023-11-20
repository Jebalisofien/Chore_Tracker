import jobsController from '../../controllers/JobsControllers';
import { useEffect, React } from "react";
import { useNavigate, useParams } from "react-router-dom";


export default function EditJob() {
    const navigate= useNavigate();
    const controller = jobsController();
    let jobId  = useParams();

    
        useEffect( () => {
            if (jobId) {
                controller.filterJobs(jobId);
                
            } 
        }, []);

    const handleSubmit= async (e) => {
        e.preventDefault();
        try
        {

            controller.updateJob(jobId);
            navigate ("/");
        }
        catch(e){
            console.log(e)
        }
    }
    return (

    <div >
            <h2>Update Job</h2>
                
            {controller.jobs &&
                    controller.jobs.map((job) => {
                    return (<form onSubmit={handleSubmit}  key={job._id}>
            
            <div className="nav justify-content-center">
                <div className="col-md-4 mb-3">
                    <label  className="col-sm-2 col-form-label"><h4>Title: </h4></label>
                    <input className="form-control mb-2" name="title" placeholder={job.title} onChange={controller.updateCreateJobField} value={controller.jobModel.title} />
                      </div></div>

            <div className="nav justify-content-center">
                <div className="col-md-4 mb-3">
                    <label  className="col-sm-2 col-form-label"><h4>Description: </h4></label>
                     <input className="form-control mb-2" name="description" placeholder={job.description} onChange={controller.updateCreateJobField} value={controller.jobModel.description}/>
       </div></div>

                
            <div className="nav justify-content-center">
                <div className="col-md-4 mb-3">
                    <label  className="col-sm-2 col-form-label"><h4>Location: </h4></label>
                    <input className="form-control mb-2" name="location" placeholder={job.location} onChange={controller.updateCreateJobField} value={controller.jobModel.location}/>
           </div></div>
            
            
            <button className="btn btn-primary mb-2" type="submit">Update Job</button>
            </form> )  })}   
        </div>
    
    );

}