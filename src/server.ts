import express from "express";
import { router } from "./routes/api/v1";

const app = express();
app.use(express.json());

app.use("/api/v1/", router);

app.listen(3333, () => {
    console.log(`Server is running at port ${3333}`);
});
