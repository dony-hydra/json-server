const faker = require("faker");

export default interface Category {
  id: number;
  name: string;
}

export function generateCategory() {
  let category: Array<Category> = [];

  for (var id = 0; id < 10; id++) {
    var firstName = faker.name.firstName();

    category.push({
      id: id,
      name: firstName,
    });
  }

  return category;
}
