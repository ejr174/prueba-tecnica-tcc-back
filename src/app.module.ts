import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeormService } from './services/typeorm/typeorm.service';
import { ClientesService } from './services/clientes/clientes.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, TypeormService, ClientesService],
})
export class AppModule {}
