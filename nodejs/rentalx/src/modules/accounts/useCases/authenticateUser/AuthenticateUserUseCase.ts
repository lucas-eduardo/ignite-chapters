import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import auth from '@config/auth';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { IDateProvider } from '@shared/container/providers/DateProvider/IDateProvider';

import { AuthenticateUserError } from './AuthenticateUserError';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
  refresh_token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('DayjsDateProvider')
    private dateProvider: IDateProvider,
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const {
      expires_in,
      expires_in_refresh_token,
      secret_refresh_token,
      secret_token,
    } = auth;

    const user = await this.usersRepository.findByEmail(email);
    if (!user) {
      throw new AuthenticateUserError();
    }

    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new AuthenticateUserError();
    }

    const token = sign({}, secret_token, {
      subject: user.id,
      expiresIn: expires_in,
    });

    const refresh_token = sign({ email }, secret_refresh_token, {
      subject: user.id,
      expiresIn: expires_in_refresh_token,
    });

    return {
      user: {
        email: user.email,
        name: user.name,
      },
      token,
      refresh_token,
    };
  }
}

export { AuthenticateUserUseCase };
