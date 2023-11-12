import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist';

@Injectable()
export class TypeormService implements TypeOrmOptionsFactory {
    createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
      return  {
        type : 'mssql',
        host : 'SQL_Latin1_General_CP1_CI_AS',
        username : 'TCC\ejaramillor',
        password : '',
        port: 1433,
        database : 'dbPruebaTecnica',

        entities : ['dist/**/*.model.{ts.js}']
      }
    }
}
