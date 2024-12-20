import mongoose from "mongoose";

const deportistaSchema = new mongoose.Schema(
  {
    name: { type: String },
    pais: { type: String },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Deportista", deportistaSchema);
