import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist';

@Injectable()
@Injectable()
export class TypeormService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    return {
        type: 'mssql',
        host: 'pruebatecnicatcc.database.windows.net',
        username: 'ejaramillor',
        password: '15f54lmp........',
        port: 1433,
        database: 'dbPruebaTecnicaTCC',
        synchronize: true,
        entities: ['dist/**/*.model.{ts,js}'],
      };
      
      
  }
}

