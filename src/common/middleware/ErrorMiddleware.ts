
import { NextFunction, Request, Response } from 'express';

export const ErrorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) =>{
    res.status(/* err?.getStatusCode() || */ 500)
    res.send({ message: err.message, code: /* err?.getStatusCode() */ 500, stack: err.stack })
}
