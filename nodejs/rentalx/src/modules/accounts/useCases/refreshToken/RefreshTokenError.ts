import { AppError } from '@shared/errors/AppError';

class RefreshTokenError extends AppError {
  constructor() {
    super('Refresh token does not exists!');
  }
}

export { RefreshTokenError };
