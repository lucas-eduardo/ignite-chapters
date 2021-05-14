import { AppError } from '@shared/errors/AppError';

class CreateCarError extends AppError {
  constructor() {
    super('Car already exists');
  }
}

export { CreateCarError };
