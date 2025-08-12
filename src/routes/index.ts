import { Router } from 'express'
import { productsRouter } from '../routes/products-routes'

const routes = Router();

routes.use("/products", productsRouter);

export { routes };