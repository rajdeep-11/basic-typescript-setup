import { type Response, type Request, type NextFunction } from "express";

export const checkPingMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log('Hello from middleware1');
    next();
};

export const checkPingMiddleware2 = (req: Request, res: Response, next: NextFunction) => {
    console.log('Hello from middleware2');
    next();
};

// export default [checkPingMiddleware, checkPingMiddleware2]
