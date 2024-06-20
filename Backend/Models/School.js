import mongoose from "mongoose";

// School Schema
const schoolSchema = new mongoose.Schema(
  {
    OBJECTID: { type: Number, required: true },
    ID: { type: Number, required: true },
    TYP: { type: Number, required: true },
    ART: { type: String, required: true },
    STANDORTTYP: { type: String, required: true },
    BEZEICHNUNG: { type: String, required: true },
    BEZEICHNUNGZUSATZ: { type: String },
    KURZBEZEICHNUNG: { type: String, required: true },
    STRASSE: { type: String, required: true },
    PLZ: { type: String, required: true },
    ORT: { type: String, required: true },
    TELEFON: { type: String },
    FAX: { type: String },
    EMAIL: { type: String },
    PROFILE: { type: String },
    SPRACHEN: { type: String },
    WWW: { type: String },
    TRAEGER: { type: String },
    TRAEGERTYP: { type: Number },
    BEZUGNR: { type: String },
    GEBIETSARTNUMMER: { type: Number },
    SNUMMER: { type: Number },
    NUMMER: { type: Number },
    GlobalID: { type: String },
    CreationDate: { type: Date },
    Creator: { type: String },
    EditDate: { type: Date },
    Editor: { type: String },
    geometry: {
      type: { type: String, default: "Point" },
      coordinates: [Number],
    },
  },
  { timestamps: true }
);


export const School = mongoose.model("School", schoolSchema);



