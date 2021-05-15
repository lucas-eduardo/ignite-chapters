import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { SendForgotPasswordMailUseCase } from './SendForgotPasswordMailUseCase';

class SendForgotPasswordMailController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { email } = req.body;

    const sendForgotPasswordUseCase = container.resolve(
      SendForgotPasswordMailUseCase,
    );

    sendForgotPasswordUseCase.execute(email);

    return res.status(200).send();
  }
}

export { SendForgotPasswordMailController };
