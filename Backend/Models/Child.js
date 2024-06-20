import mongoose from "mongoose";

// Schulsozialarbeit Schema
const schulsozialarbeitSchema = new mongoose.Schema(
  {
    OBJECTID: { type: Number, required: true },
    ID: { type: Number, required: true },
    TRAEGER: { type: String, required: true },
    LEISTUNGEN: { type: String, required: true },
    BEZEICHNUNG: { type: String },
    KURZBEZEICHNUNG: { type: String },
    STRASSE: { type: String, required: true },
    PLZ: { type: String, required: true },
    ORT: { type: String, required: true },
    TELEFON: { type: String },
    EMAIL: { type: String },
    FAX: { type: String },
    geometry: {
      type: { type: String, default: "Point" },
      coordinates: [Number],
    },
  },
  { timestamps: true }
);

export const Child = mongoose.model("Child", schulsozialarbeitSchema);
