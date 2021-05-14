import { AppError } from '@shared/errors/AppError';

class CreateCategoryError extends AppError {
  constructor() {
    super('Category already exists');
  }
}

export { CreateCategoryError };
