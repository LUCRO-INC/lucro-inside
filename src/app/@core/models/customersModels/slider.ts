import { Images } from '../images';

export interface Slider {
  name: String;
  class: String;
  category?: String;
  title: String;
  subtitle?: String;
  images: Images[];
  imageClass: String;
  button?: String;
}
