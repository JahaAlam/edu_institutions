import express from "express";

import {
  getChild,
  getKindergarten,
  getSchool,
  getTeenager,
} from "../controllers/mapViewController.js";

const router = express.Router();

//------------------creating schools collection
router.get("/school", getSchool);

//------------------------------create  Kindergarden collections--------------
router.get("/kindergarten", getKindergarten);

//----------------------Child ----------------------
router.get("/child", getChild);

//---------------------Teenager--------------------
router.get("/teenager", getTeenager);

export default router;
