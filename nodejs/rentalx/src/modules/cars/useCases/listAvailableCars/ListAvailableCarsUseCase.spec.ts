import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';

import { ListAvailableCarsUseCase } from './ListAvailableCarsUseCase';

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('List Cars', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory,
    );
  });

  it('should be able to list all available cars', async () => {
    const car = await carsRepositoryInMemory.create({
      brand: 'Audi',
      category_id: 'category_id',
      daily_rate: 140.0,
      description: 'Carro chic',
      fine_amount: 100,
      license_plate: 'DEF-1212',
      name: 'Audi A3',
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by name', async () => {
    const car = await carsRepositoryInMemory.create({
      brand: 'Audi 2',
      category_id: 'category_id_2',
      daily_rate: 140.0,
      description: 'Carro chic 2',
      fine_amount: 100,
      license_plate: 'DEF-1212',
      name: 'Audi A3 - 2',
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: 'Audi A3 - 2',
    });

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by brand', async () => {
    const car = await carsRepositoryInMemory.create({
      brand: 'Audi 3',
      category_id: 'category_id_3',
      daily_rate: 140.0,
      description: 'Carro chic 3',
      fine_amount: 100,
      license_plate: 'DEF-1212',
      name: 'Audi A3 - 3',
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: 'Audi 3',
    });

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by category', async () => {
    const car = await carsRepositoryInMemory.create({
      brand: 'Audi 4',
      category_id: 'category_id_4',
      daily_rate: 140.0,
      description: 'Carro chic 4',
      fine_amount: 100,
      license_plate: 'DEF-1212',
      name: 'Audi A3 - 4',
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: 'category_id_4',
    });

    expect(cars).toEqual([car]);
  });
});
