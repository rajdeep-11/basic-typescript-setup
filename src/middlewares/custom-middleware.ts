import { type Request, type Response, type NextFunction } from "express";

export const customMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log("Custom Middleare Called");
    console.log(`Incoming request: ${req.method} ${req.url}`);
    next();
};
