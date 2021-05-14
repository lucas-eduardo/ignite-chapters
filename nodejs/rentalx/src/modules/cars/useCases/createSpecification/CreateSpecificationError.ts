import { AppError } from '@shared/errors/AppError';

class CreateSpecificationError extends AppError {
  constructor() {
    super('Specification already exists');
  }
}

export { CreateSpecificationError };
