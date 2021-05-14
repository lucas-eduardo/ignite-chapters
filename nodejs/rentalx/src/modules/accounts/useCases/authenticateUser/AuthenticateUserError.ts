import { AppError } from '@shared/errors/AppError';

class AuthenticateUserError extends AppError {
  constructor() {
    super('Email or password incorrect');
  }
}

export { AuthenticateUserError };
