import express from "express";
import bodyParser from "body-parser";
import authRoutes from "./routes/auth.js";
const app=express();
app.use(express.json());

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));





app.use("/auth", authRoutes);

const port=3000;

app.listen(3000, () => {
    console.log('Server started on port 3000');
});