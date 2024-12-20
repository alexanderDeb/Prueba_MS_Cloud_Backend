import express from "express";
import cors from "cors";
import { ConnectionDB } from "./db.js";
import DeportistaRoutes from "./routes/deportista.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(DeportistaRoutes);
const Port = 8000;

ConnectionDB();
app.listen(Port);
console.log("Server is running in the port: ", Port);
