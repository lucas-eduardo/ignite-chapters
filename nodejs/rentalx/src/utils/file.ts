import { promises } from 'fs';

export const deleteFile = async (filename: string) => {
  try {
    await promises.stat(filename);
  } catch (error) {
    return;
  }

  await promises.unlink(filename);
}