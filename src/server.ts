import express from "express";

import { categoriesRouter } from "./api/v1/categories.routes";

const app = express();
app.use(express.json());

app.use("/api/v1/categories", categoriesRouter);

app.listen(3333, () => {
    console.log(`Server is running at port ${3333}`);
});
