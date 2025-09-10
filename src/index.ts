import express from "express";
import sequelize from "./config/db";
import userRoute from "./routes/userRoute";

const app = express();
app.use(express.json());
app.use("/users", userRoute);

sequelize.sync({ force: false }).then(() => {
  console.log("conectado");

  app.listen(3000, () => {
    console.log("servidor preparado  http://localhost:3000 ");
  });
});
