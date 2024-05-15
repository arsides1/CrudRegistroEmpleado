import { Area } from "./area";
import { IdentifacionTipo } from "./identifacion-tipo";
import { Pais } from "./pais";

export class Empleado {
    id!: number;
    primer_apellido!: String;
    segundo_apellido!: String;
    primer_nombre!: String;
    otros_nombre!: String;
    pais!: Pais;
    identificacion_tipo!: IdentifacionTipo;
    email!: String;
    fecha_ingreso!: Date;
    area!: Area;
    estado!: Boolean; 
    numero_identificacion!: String;
}
