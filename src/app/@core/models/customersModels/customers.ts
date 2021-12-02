import { Slider } from '../customersModels/slider';
import { Article } from '../customersModels/article';
import { Category } from '../customersModels/category';

export interface Customers {
  slider: Slider[];
  articles: Article[];
  categories: Category[];
}
