import { CustomError } from './custom-error';

export class NotFoundError extends CustomError {
  statusCode = 404;
  constructor(private msg?: string) {
    super('Route not found');

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
  serializeErrors() {
    return [{ message: this.msg || 'Not Found' }];
  }
}
