// eslint-disable-next-line max-classes-per-file
import { AppError } from '@shared/errors/AppError';

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace ResetUsersPasswordError {
  export class TokenInvalid extends AppError {
    constructor() {
      super('Token invalid!');
    }
  }

  export class TokenExpired extends AppError {
    constructor() {
      super('Token expired!');
    }
  }
}
