import { Images } from '../images';

export interface Slider {
  name: String;
  category?: String;
  title: String;
  subtitle?: String;
  images: Images[];
  imageClass: String;
  button?: String;
}
