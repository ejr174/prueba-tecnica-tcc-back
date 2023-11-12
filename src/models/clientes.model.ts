import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Cliente') // Nombre de la tabla en la base de datos
export class Cliente {
  @PrimaryGeneratedColumn() // Columna de clave primaria generada automáticamente
  ClienteID: number;

  @Column()
  TipoIdentificacionID: number;

  @Column({ length: 20 })
  NumeroIdentificacion: string;

  @Column({ length: 100 })
  Nombre: string;

  @Column()
  GeneroID: number;

  @Column({ length: 100 })
  CorreoElectronico: string;

  @Column({ length: 20 })
  Telefono: string;

  @Column({ type: 'datetime' }) // Tipo de columna específico para DATETIME
  FechaRegistro: Date;
}
