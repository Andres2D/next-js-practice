import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meals.db');

export  const getMeals = async() => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // throw new Error('Loading Meals failed');
  return db.prepare('SELECT * FROM meals').all();
};

export const getMeal = (slug) => {
  // This way protects you from sql injections
  return db.prepare('SELECT * FROM meals WHERE slug = ? ').get(slug);
}

export const saveMeal = (meal) => {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);
}
