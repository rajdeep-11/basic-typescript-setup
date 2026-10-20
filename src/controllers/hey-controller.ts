import type { Request, Response } from "express";

export const getHome = (_req: Request, res: Response): void => {
    res.status(200).json({
        status: 'OK',
        success : true,
        message: 'Hello from controller side',
        err: {}
    });
}

export const pingCheck = (_req: Request, res: Response): void => {
    res.status(200)
    .json({
        status: 'OK',
        success: true,
        message: new Date().toDateString(),
        err: {}
    });
}