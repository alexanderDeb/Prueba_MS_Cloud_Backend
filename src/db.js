import mongoose from "mongoose";

export const ConnectionDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Alexander:1234@cluster.wc0ampm.mongodb.net/JuegosOlimpicos?retryWrites=true&w=majority"
    );
    console.log(">>> DB is conected <<<");
  } catch (error) {
    console.log(error);
  }
};
