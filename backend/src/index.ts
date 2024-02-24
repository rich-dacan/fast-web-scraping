import express from "express";
import cors from "cors";
import amazonRoutes from "./routes/amazon";

const app = express();

app.use(cors());
app.use("/api", amazonRoutes);

const PORT: number = parseInt(process.env.PORT as string, 10) || 3333;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}! 🚀`));
