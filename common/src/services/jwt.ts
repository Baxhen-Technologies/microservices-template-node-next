import jwt from 'jsonwebtoken';

export interface UserPayload {
  id: string;
  email: string;
}

export class Jwt {
  static sign(payload: object): { jwt: string } {
    const userJwt = jwt.sign(payload, process.env.JWT_KEY!);
    return {
      jwt: userJwt,
    };
  }

  static verify(token: string) {
    const payload = jwt.verify(token, process.env.JWT_KEY!) as UserPayload;
    return payload;
  }
}
