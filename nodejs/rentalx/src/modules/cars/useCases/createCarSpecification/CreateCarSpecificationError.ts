// eslint-disable-next-line max-classes-per-file
import { AppError } from '@shared/errors/AppError';

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace CreateCarSpecificationError {
  export class CarNotFound extends AppError {
    constructor() {
      super('Car not found');
    }
  }

  export class SpecificationNotFound extends AppError {
    constructor() {
      super('Specification not found');
    }
  }
}
