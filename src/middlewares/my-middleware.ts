import { Request, Response } from 'express';
export function myMiddleware(req: Request, res: Response) {
    // Custom middleware logic
    req.user_id = '12345'; // Example user ID assignment
    console.log('Middleware executed');
}