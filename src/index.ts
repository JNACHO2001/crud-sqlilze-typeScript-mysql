import express from "express";
import sequelize from "./config/db";
import userRoute from "./routes/userRoute";
import clienteRoute from "./routes/clienteRoute"
import "./models/index" // importamos las relaciones 
const app = express();
app.use(express.json());
app.get("/", (_req, res) => {
  res.json({ message: "Servidor preparado" });
});
app.use("/users", userRoute);
app.use("/clientes",clienteRoute)

sequelize.sync({ force:false }).then(() => {
  console.log("conectado");

  app.listen(3000, () => {
    console.log("servidor preparado  http://localhost:3000 ");
  });
});

