import { Images } from './../images';
import { Button } from './../button';

export interface Solucion {
  name?: String;
  label?: String;
  title?: String;
  subTitle?: String;
  body?: String;
  questions?: String[];
  images?: Images[];
  button?: Button;
}
