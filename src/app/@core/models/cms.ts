import { ClientsImg } from './clients-img';
import { Section } from "./section";
import {SolucionesSection} from './solucionesSection';

export interface Cms {
    Empresas?:Section[];
    Contactenos?:Section[];
    Soluciones?:SolucionesSection[];
    Clientes?:ClientsImg[];
}
