import React, { useState } from 'react';
import jobsController from '../../controllers/JobsControllers';

import { useNavigate } from "react-router-dom";


export default function AddJob() {
    const navigate= useNavigate();
    const controller = jobsController();
    const handleSubmit= async (e) => {
        e.preventDefault();
        try
        {

            controller.AddJob();
            navigate ("/");
        }
        catch(e){
            console.log(e)
        }
    }
    

    return (
    
    
    <div>
            <h2>Add a Job</h2>
            <form onSubmit={handleSubmit} >
            
            <div className="nav justify-content-center">
                <div className="col-md-4 mb-3">
                    <label  className="col-sm-2 col-form-label"><h4>Title: </h4></label>
                    <input className="form-control mb-2" name="title" onChange={controller.updateCreateJobField} value={controller.jobModel.title}/>
            </div></div>
            <div className="nav justify-content-center">
                <div className="col-md-4 mb-3">
                    <label  className="col-sm-2 col-form-label"><h4>Description: </h4></label>
                    <input className="form-control mb-2" name="description" onChange={controller.updateCreateJobField} value={controller.jobModel.description}/>
            </div></div>
            <div className="nav justify-content-center">
                <div className="col-md-4 mb-3">
                    <label  className="col-sm-2 col-form-label"><h4>Location: </h4></label>
                    <input className="form-control mb-2" name="location" onChange={controller.updateCreateJobField} value={controller.jobModel.location}/>
            </div></div>
            
            
            <button className="btn btn-primary mb-2" type="submit">Add a job</button>
            </form>
        </div>
    
    );

}