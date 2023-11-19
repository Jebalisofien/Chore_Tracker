const Job = require("../models/job");

const fetchJobs = async (req, res) => {
  // Find the jobs
  const jobs = await Job.find({ taker:[]}).populate("user");

  // Respond with them
  res.json({ jobs });
};
const fetchMyJobs = async (req, res) => {
  // Find the jobs
  const jobs = await Job.find({ taker: req.user._id });

  // Respond with them
  res.json({ jobs });
};

const fetchJob = async (req, res) => {
  // Get id off the url
  const jobId = req.body.jobId;
  // Find the note using that id
  const job = await Job.findById(jobId).populate("user");
  // Respond with the note
  res.json({ job });
};

const createJob = async (req, res) => {
  // Get the sent in data off request body
  const { title, description, location } = req.body;

  // Create a note with it
  const job = await Job.create({
    title,
    description,
    location,
    user: req.user._id,
  });

  // respond with the new note
  res.json({ job });
};

const updateJob = async (req, res) => {
  // Get the id off the url
  const jobId = req.body.jobId;
  console.log(jobId)
  // Get the data off the req body
  const { title, description, location} = req.body.jobModel;

  // Find and update the record
  await Job.findByIdAndUpdate(jobId, {
    title,
    description,
    location,
  });

  // Find updated note
  const job = await Job.findById(jobId);

  // Respond with it
  res.json({ job });
};


const assignJob = async (req, res) => {
  // Get the id off the url
  const jobId = req.body.jobId;
  // Find and update the record
  await Job.findByIdAndUpdate(jobId, {
    
    taker: req.user._id,
  });

  // Find updated note
  const job = await Job.findById(jobId);

  // Respond with it
  res.json({ job });
};

const deleteJob = async (req, res) => {
  // get id off url
  const jobId = req.body.jobId;
console.log(jobId)
  // Delete the record
  await Job.findByIdAndDelete(jobId );

  // Respond
  res.json({ success: "Record deleted" });
};

module.exports = {
  fetchJobs,
  fetchJob,
  createJob,
  updateJob,
  deleteJob,
  assignJob,
  fetchMyJobs
};
