import { Request, Response } from "express";

import CreateCourseService from './CreateCourseService';

export function createCourse(req: Request, res: Response) {
  CreateCourseService.execute({
    name: 'NodeJS',
    duration: 10,
    education: 'Lucas'
  });

  CreateCourseService.execute({
    name: 'React',
    education: 'Lucas'
  });
}