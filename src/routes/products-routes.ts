import { Router } from 'express'
import { myMiddleware } from '../middlewares/my-middleware'

const productsRouter = Router()

productsRouter.get('/', (req, res) => {
    const { page, limit } = req.query
    res.send(`Página ${page} com limite de ${limit} produtos`)
})

productsRouter.post('/', myMiddleware, (req, res) => {
    const { name, price } = req.body
    res.status(201).json({ name, price, user_id: req.user_id })
})

export { productsRouter }