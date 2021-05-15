import { AppError } from '@shared/errors/AppError';

class SendForgotPasswordMailError extends AppError {
  constructor() {
    super('User not found');
  }
}

export { SendForgotPasswordMailError };
