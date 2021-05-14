import { AppError } from '@shared/errors/AppError';

class DevolutionRentalError extends AppError {
  constructor() {
    super('Rental does not exists');
  }
}

export { DevolutionRentalError };
