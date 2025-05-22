import express from "express";
import "dotenv/config";
import cors from "cors";
import aiRoutes from "./routes/ai.route.js";

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("API Working");
});

//  Routes
app.use("/ai", aiRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
