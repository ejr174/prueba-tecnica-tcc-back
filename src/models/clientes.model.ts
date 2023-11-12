import { Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Clientes {
    @PrimaryColumn()
    numeroIdentificacion : string;
    nombre : string;
    correoElectronico : string;
    telefono : string;
    fechaRegistro : string;
    tipoIdentificacionID : number;
    generoID : number   ;
}