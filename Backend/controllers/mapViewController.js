import mongoose from "mongoose";
import { Child } from "../Models/Child.js";
import { Kindergarten } from "../Models/Kindergarten.js";
import { School } from "../Models/School.js";
import { Teenager } from "../Models/Teenager.js";

//---------GET SCHOOLS---------------
export const getSchool = async (req, res) => {
  console.log("fetching Schools data");
  try {
    // Fetch data based on category
    const schools = await School.find();
    
    res.json(schools);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//-------------------get Child--------------

export const getChild = async (req, res) => {
  console.log("fetching Child data");
  try {
    // Fetch data based on category
    const child = await Child.find();
    res.json(child);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//-------------------------getKindergarten-----------

export const getKindergarten = async (req, res) => {
  console.log("fetching kindergarden data");
  try {
    // Fetch data based on category
    const kindergarten = await Kindergarten.find();
    res.json(kindergarten);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//------------------------getteenager--------

export const getTeenager = async (req, res) => {
  console.log("Fetching teenager data");
  try {
    // Fetch data based on category
    const teenager = await Teenager.find();
    res.json(teenager);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
