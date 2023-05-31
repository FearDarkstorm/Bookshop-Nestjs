

import { Request, Response, NextFunction } from 'express';

export function bookMiddleware(req: Request, res: Response, next: NextFunction) {
let protocol = req.protocol; // http https
let host = req.get('host'); // localhost
let url = req.originalUrl;
let method = req. method;
  console.log(protocol,host,url,method);
  next();
}