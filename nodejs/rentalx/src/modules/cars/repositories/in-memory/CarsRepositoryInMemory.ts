import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO';
import { Car } from '@modules/cars/infra/typeorm/entities/Car';

import { ICarsRepository } from '../ICarsRepository';

class CarsRepositoryInMemory implements ICarsRepository {
  cars: Car[] = [];

  async create({
    brand,
    category_id,
    daily_rate,
    description,
    fine_amount,
    license_plate,
    name,
    specifications,
    id,
  }: ICreateCarDTO): Promise<Car> {
    const cars = new Car();

    Object.assign(cars, {
      brand,
      category_id,
      daily_rate,
      description,
      fine_amount,
      license_plate,
      name,
      specifications,
      id,
    });

    this.cars.push(cars);

    return cars;
  }

  async findByLicensePlate(license_plate: string): Promise<Car> {
    return this.cars.find(car => car.license_plate === license_plate);
  }

  async findAvailable(
    brand?: string,
    category_id?: string,
    name?: string,
  ): Promise<Car[]> {
    const cars = this.cars
      .filter(({ available }) => available)
      .filter(car => (brand && car.brand === brand) ?? true)
      .filter(car => (category_id && car.category_id === category_id) ?? true)
      .filter(car => (name && car.name === name) ?? true);

    return cars;
  }

  async findById(carId: string): Promise<Car> {
    return this.cars.find(({ id }) => id === carId);
  }
}

export { CarsRepositoryInMemory };
