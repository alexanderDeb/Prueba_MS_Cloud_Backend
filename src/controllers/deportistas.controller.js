import Deportista from "../models/deportista.model.js";

export const getDeportista = async (req, res) => {
  const deportista = await Deportista.find();
  res.json(deportista);
};

export const createDeportista = async (req, res) => {
  const { name, pais } = req.body;

  try {
    const NewDeportista = new Deportista({
      name: name,
      pais: pais
      
    });
    const DeportistaSave = await NewDeportista.save();
    res.json(DeportistaSave);
  } catch (err) {
    res.status(400).json({ message: "No se logro crear el deportista", err });
  }
};
