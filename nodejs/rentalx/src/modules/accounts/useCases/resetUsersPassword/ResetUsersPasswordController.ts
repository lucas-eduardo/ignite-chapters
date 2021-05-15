import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ResetUsersPasswordUseCase } from './ResetUsersPasswordUseCase';

class ResetUsersPasswordController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { token } = req.query;
    const { password } = req.body;

    const resetUsersPasswordUseCase = container.resolve(
      ResetUsersPasswordUseCase,
    );

    await resetUsersPasswordUseCase.execute({ token: String(token), password });

    return res.status(200).send();
  }
}

export { ResetUsersPasswordController };
