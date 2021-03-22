import fs from 'fs';
import csvParse from 'csv-parse';

import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IImportCategory {
  name: string;
  description: string;
}

class ImportCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  private loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: IImportCategory[] = []

      const parseFile = csvParse();

      stream.pipe(parseFile);

      parseFile.on('data', async (line) => {
        const [name, description] = line;

        categories.push({
          name,
          description
        });
      })
      .on('end', () => resolve(categories))
      .on('error', reject);
    })
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    categories.map(({ name, description }) => {
      const existCategory = this.categoriesRepository.findByName(name);

      if (!existCategory) {
        this.categoriesRepository.create({
          name,
          description
        });
      }
    });
  }
}

export { ImportCategoryUseCase }
