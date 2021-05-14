import { AppError } from '@shared/errors/AppError';

class CreateUserError extends AppError {
  constructor() {
    super('User already exists');
  }
}

export { CreateUserError };
