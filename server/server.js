
require("dotenv").config();

  // Import dependencies
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectToDb = require("./config/connectToDb");

const Job = require("./models/job");
const jobsController = require("./controllers/jobsController");
const usersController = require("./controllers/usersController");
const requireAuth = require("./middleware/requireAuth");
const app = express();



const corsOptions ={
  origin:'http://localhost:3000',
  credentials: true
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

connectToDb();




// Routing
  //User
  app.post("/api/signup", usersController.signup);
  app.post("/api/login", usersController.login);
  app.get("/api/logout", usersController.logout);
  app.get("/api/check-auth", requireAuth,  usersController.checkAuth);
  app.post("/api/update-account", requireAuth,  usersController.updateAccount);
  // Job

  app.post("/api/job", requireAuth, jobsController.createJob);
  app.get("/api/jobs", requireAuth, jobsController.fetchJobs);
  app.get("/api/my-jobs", requireAuth, jobsController.fetchMyJobs);
  app.post("/api/view-job", requireAuth, jobsController.fetchJob);
  app.post("/api/update", requireAuth, jobsController.updateJob);
  app.post("/api/delete-job", requireAuth, jobsController.deleteJob);
  app.post("/api/assign-job", requireAuth, jobsController.assignJob);



app.listen(process.env.PORT);