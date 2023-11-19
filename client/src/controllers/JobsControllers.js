import create from "zustand";
import axios from "axios";



const jobsController = create((set) => ({
    
    jobs: [],
    
    jobModel: {
        title:"",
        description:"",
        location:"",
        
    },
    


    AddJob: async () => {
        
        const { jobModel} = jobsController.getState();
        console.log(jobModel); 
        const res = await axios.post("/api/job", jobModel);
        

        set({
            job: [ res.data],

            jobModel: {
                title:"",
                description:"",
                location:"",
                taker: null,

            },
        });
        
        
    },

    updateCreateJobField: (e) => {
        const { name, value } = e.target;
    
        set((state) => {
            return {
                jobModel: {
                ...state.jobModel,
                [name]: value,
            },
            };
        });
        },
    updateJob: async (e) => {
        const { jobModel} = jobsController.getState();
        const jobId = e
        console.log(jobId);
        const res = await axios.post("/api/update", {jobId: jobId,jobModel: jobModel});
        
        },
    


        fetchJobs: async () => {
            // Fetch the jobs
                const res = await axios.get("/api/jobs");
                
            // Set to state
                set({ jobs: res.data.jobs });
                
            },
        fetchMyJobs: async () => {
            // Fetch the jobs
                const res = await axios.get("/api/my-jobs");
                
            // Set to state
                set({ myJobs: res.data.jobs });
                
            },

        assignJob: async (e) => {
            const { id } = e.target;
            const {jobs, myJobs} = jobsController.getState()
            
            // Fetch the Cart
            const res = await axios.post("/api/assign-job", { jobId: id });
            const newJob = jobs.filter((job) => {
                return job._id === id;
              });
            const newJobs = jobs.filter((job) => {
                return job._id !== id;
              });

    set({
        jobs: newJobs,
        myJobs: [...myJobs, newJob[0]],
    })
              
            set (res)
            },
        filterJobs: async (e) => {

            const jobId = e.jobId
            console.log(jobId)
            const res = await axios.post("/api/view-job", { jobId : jobId });
            


            set({ jobs: [res.data.job], jobModel: [res.data.job]  });
            console.log(res.data.job)
            },
        deleteJob: async (e) => {

            const jobId = e.target.id
            const {jobs, myJobs} = jobsController.getState()
            const res = await axios.post("/api/delete-job", { jobId : jobId });
            // Update state
    const newJobs = jobs.filter((job) => {
        return job._id !== jobId;
      });
    const myNewJobs = myJobs.filter((job) => {
        return job._id !== jobId;
      });
            set({ jobs: newJobs, myJobs: myNewJobs });
       },

}));

    

export default jobsController;