import { Request, Response, NextFunction } from 'express';

import { Jwt, UserPayload } from '../services/jwt';

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.session?.jwt) {
    return next();
  }
  try {
    req.currentUser = Jwt.verify(req.session.jwt);
  } catch (error) {
    console.log(error);
  }
  next();
};
