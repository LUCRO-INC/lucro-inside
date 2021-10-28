import { ClientsImg } from './clients-img';
import { Section } from "./section";
import {SolucionesSection} from './solucionesSection';

export interface Cms {
    Empresas?:Array<Section>;
    Contactenos?:Array<Section>;
    Soluciones?: Array<SolucionesSection>;
    Clientes?: Array<ClientsImg>;
}
