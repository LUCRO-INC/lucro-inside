import { Images } from "./images";
import { Button } from './button';

export interface SolucionesSection {
    name?: String;
    label?: String;
    title?: String;
    subTitle?: String;
    body?: String;
    images?: Array<Images>;
    questions?: Array<String>;
    button?: Button;
}
