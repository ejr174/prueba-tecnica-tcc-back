import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Clientes {
    @PrimaryColumn()
    clienteID : number;
    @Column()
    numeroIdentificacion : string;
    @Column()
    nombre : string;
    @Column()
    correoElectronico : string;
    @Column()
    telefono : string;
    @Column()
    fechaRegistro : string;
    @Column()
    tipoIdentificacionID : number;
    @Column()
    generoID : number   ;
}