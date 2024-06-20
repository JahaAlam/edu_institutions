import mongoose from "mongoose";

// Kindergarten Schema
const kindergartenSchema = new mongoose.Schema(
  {
    OBJECTID: { type: Number, required: true },
    ID: { type: Number, required: true },
    TRAEGER: { type: String, required: true },
    BEZEICHNUNG: { type: String, required: true },
    KURZBEZEICHNUNG: { type: String, required: true },
    STRASSE: { type: String, required: true },
    STRSCHL: { type: String, required: true },
    HAUSBEZ: { type: String, required: true },
    PLZ: { type: String, required: true },
    ORT: { type: String, required: true },
    HORT: { type: Boolean, required: true },
    KITA: { type: Boolean, required: true },
    URL: { type: String },
    TELEFON: { type: String },
    FAX: { type: String },
    EMAIL: { type: String },
    BARRIEREFREI: { type: Boolean },
    INTEGRATIV: { type: Boolean },
    geometry: {
      type: { type: String, default: "Point" },
      coordinates: [Number],
    },
  },
  { timestamps: true }
);

export const Kindergarten = mongoose.model("Kindergarten", kindergartenSchema);
