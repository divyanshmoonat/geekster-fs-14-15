const JobModel = require("../models/job");

const createJob = async (req, res) => {
  const jobObj = req.body;
  const newJob = new JobModel(jobObj);
  const newlySavedJob = await newJob.save();
  console.log(newlySavedJob);
  //   console.log(req.body);
  res.json({
    success: true,
    message: "Job created successfully",
    jobId: newlySavedJob._id,
  });
};

const listJob = async (req, res) => {
  const jobsList = await JobModel.find();
//   console.log(jobsList);
  res.json({
    success: true,
    message: "List job api",
    results: jobsList,
  });
};

const editJob = async (req, res) => {
  res.json({
    success: true,
    message: "Dummy edit job api",
  });
};

const deleteJob = async (req, res) => {
  res.json({
    success: true,
    message: "Dummy Delete job api",
  });
};

const jobController = {
  createJob,
  listJob,
  editJob,
  deleteJob,
};

module.exports = jobController;
