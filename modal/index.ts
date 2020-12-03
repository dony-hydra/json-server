import { generateEmployees } from "./employees";
import { generateCategory } from "./category";

export function generateDB(): any {
  return {
    employees: { ...generateEmployees() },
    category: [...generateCategory()],
  };
}
