import { Router } from 'express'
import { myMiddleware } from '../middlewares/my-middleware'
import { ProductController } from '../controllers/ProductsController'

const productsRouter = Router()
const productController = new ProductController()

productsRouter.get('/', productController.index)

productsRouter.post('/', myMiddleware, productController.create)

export { productsRouter }