import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import { importCategoryController } from "../modules/cars/useCases/importCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();

categoriesRoutes.post("/categories", createCategoryController.handle);

categoriesRoutes.get("/categories", (request, response) => {
    return listCategoriesController.handle(request, response);
});

categoriesRoutes.post(
    "/categories/import",
    upload.single("file"),
    (request, response) => {
        return importCategoryController.handle(request, response);
    }
);

export { categoriesRoutes };
