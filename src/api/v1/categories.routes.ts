import { Router, Request, Response } from "express";

import { createCategoryController } from "../../modules/cars/useCases/createCategory";
import { listCategoryController } from "../../modules/cars/useCases/listCategories";

const categoriesRouter = Router();

categoriesRouter.post("/", (request: Request, response: Response) => {
    return createCategoryController.handle(request, response);
});

categoriesRouter.get("/", (request, response) => {
    return listCategoryController.handle(request, response);
});

export { categoriesRouter };
