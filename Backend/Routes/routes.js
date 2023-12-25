import { Router } from "express";
import { addProject, deleteAllProjects, deleteOne, getAllTopProjects, updateProject, getOneData } from "../Controller/controllers.js";
import { addMoreProject, deleteAll, getMoreProjects, updateOne, getOneProject } from "../Controller/controller2.js";

const routes = Router();

//! Get Top Project API
routes.get("/topProjects", getAllTopProjects);
routes.get("/findOne/:id", getOneData);
routes.post("/topProjects", addProject);
routes.put("/updateProject/:id", updateProject);
routes.delete("/deleteAll", deleteAllProjects);
routes.delete("/delete/:id", deleteOne);


//! Get More project API
routes.get("/moreProjects", getMoreProjects);
routes.post("/moreProjects", addMoreProject);
routes.delete("/deleteMP", deleteAll);
routes.put("/updateOne/:_id", updateOne);
routes.get("/getOneProject/:id", getOneProject);

export default routes;