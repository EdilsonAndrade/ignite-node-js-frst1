import CategoriesRepository from "../../repository/implementations/CategoryRepository";
import CreateCategoryController from "./CreateCategoryController";
import CreateCategoryUsecase from "./CreateCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance();

const createCategoryUseCase = new CreateCategoryUsecase(categoriesRepository);

const createCategoryController = new CreateCategoryController(
    createCategoryUseCase
);

export { createCategoryController };
