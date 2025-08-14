import { Request, Response } from 'express'
import { AppError } from '../utils/AppError'
import { z } from 'zod'

class ProductController {
    /**
     *  index - List all products
     *  show - Show a specific product
     *  create - Create a new product
     *  update - Update an existing product
     * delete - Delete a product
    */

    index(request: Request, response: Response) {
        const { page, limit } = request.query

        response.send(`Página ${page} com limite de ${limit} produtos`)

    }

    create(request: Request, response: Response) {
        const bodySchema = z.object({
            name: z.string().min(5, 'Name must be at least 5 characters long'),
            price: z.number().positive('Price must be a positive number')
        })
        const { name, price } = bodySchema.parse(request.body)

        // if (!name) {
        //     throw new AppError('Name is required', 400)
        // }
        // if (name.length < 5) {
        //     throw new AppError('Name must be at least 5 characters long', 400)
        // }

        // if (!price) {
        //     throw new AppError('Price is required', 400)
        // }

        // throw new Error('Erro na criação do produto')
        // throw new AppError('Erro na criação do produto')

        response.status(201).json({ name, price, user_id: request.user_id })
    }
}

export { ProductController }