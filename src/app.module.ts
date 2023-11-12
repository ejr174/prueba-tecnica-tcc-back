import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeormService } from './services/typeorm/typeorm.service';
import { ClientesService } from './services/clientes/clientes.service';
import { ClientesController } from './controller/clientes/clientes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clientes } from './models/clientes.model';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({useClass : TypeormService}),
    TypeOrmModule.forFeature([Clientes])
  ],
  controllers: [AppController, ClientesController],
  providers: [AppService, TypeormService, ClientesService],
})
export class AppModule {}
