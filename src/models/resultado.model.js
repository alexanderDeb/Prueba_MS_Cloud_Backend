import mongoose, { Schema } from "mongoose";

const resultadoSchema = new mongoose.Schema(
  {
    value: { type: String },
    deportistaID : { type: Schema.Types.ObjectId }
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Resultado", resultadoSchema);
