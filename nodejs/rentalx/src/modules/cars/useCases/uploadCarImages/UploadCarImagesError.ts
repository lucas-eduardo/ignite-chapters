import { AppError } from '@shared/errors/AppError';

export class UploadCarImageError extends AppError {
  constructor() {
    super('Car not found');
  }
}
