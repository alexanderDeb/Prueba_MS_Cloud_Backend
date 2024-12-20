import mongoose, { Schema } from "mongoose";

const modalidadSchema = new mongoose.Schema(
  {
    modalidad: { type: String },
    value: { type: String },
    deportistaID : { type: Schema.Types.ObjectId }
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Modalidad", modalidadSchema);
