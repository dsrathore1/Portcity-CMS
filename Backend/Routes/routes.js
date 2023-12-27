import { Router } from "express";
import { addProject, deleteAllProjects, deleteOne, getAllTopProjects, updateProject, getOneData } from "../Controller/tp_controller.js";
import { addMoreProject, deleteAllMoreProjects, getAllMoreProjects, updateOne, getOneMp } from "../Controller/mp_controller.js";

const routes = Router();

//! Get Top Project API
routes.get("/topProjects", getAllTopProjects);
routes.get("/topProjects/findOne/:id", getOneData);
routes.post("/topProjects", addProject);
routes.put("/topProjects/updateProject/:id", updateProject);
routes.delete("/topProjects/deleteAll", deleteAllProjects);
routes.delete("/topProjects/deleteOneTp/:id", deleteOne);


//! Get More project API
routes.get("/moreProjects", getAllMoreProjects);
routes.get("/moreProjects/getOneMp/:id", getOneMp);
routes.post("/moreProjects", addMoreProject);
routes.put("/moreProjects/updateOneMp/:id", updateOne);
routes.delete("/moreProjects/deleteAllMp", deleteAllMoreProjects);

export default routes;