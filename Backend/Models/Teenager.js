import mongoose from "mongoose";

const TeenagerSchema = new mongoose.Schema({
  type: {
    type: String,
    default: "FeatureCollection",
  },
  name: {
    type: String,
    required: true,
  },
  crs: {
    type: {
      type: String,
      required: true,
    },
    properties: {
      name: {
        type: String,
        required: true,
      },
    },
  },
  features: [
    {
      type: {
        type: String,
        default: "Feature",
      },
      properties: {
        OBJECTID: Number,
        ID: Number,
        TRAEGER: String,
        LEISTUNGEN: String,
        BEZEICHNUNG: String,
        KURZBEZEICHNUNG: String,
        STRASSE: String,
        PLZ: String,
        ORT: String,  
        TELEFON: String,
        EMAIL: String,
        FAX: String,
        
      },
      geometry: {
        type: {
          type: String,
          default: "Point",
        },
        coordinates: [Number], // Array of numbers (longitude, latitude)
      },
    },
  ],
});

export const Teenager = mongoose.model("Teenager", TeenagerSchema);