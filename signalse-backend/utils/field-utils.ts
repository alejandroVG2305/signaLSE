import { AppError } from "../errors/app-error";

export const checkFieldExists = (field: string): void => {
  if (!field || field.trim().length === 0) {
    throw new AppError("errors.missingField", 400);
  }
};

export const checkFieldIsDefined = (field: any): void => {
  if (field === undefined) throw new AppError("errors.missingField", 400);
};
