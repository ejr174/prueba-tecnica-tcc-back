import { Controller, HttpException, HttpStatus, Get, Post, Put, Delete, Body, Param  } from '@nestjs/common';
import { ClientesService } from '../../services/clientes/clientes.service';
import { error } from 'console';
import { get } from 'http';
import { Cliente } from 'src/models/clientes.model';

@Controller('Clientes')
export class ClientesController {
    constructor (private clientesService : ClientesService){

    }

    //LISTAR CLIENTES
    @Get()
    get(){
        return this.clientesService.findAll()
        .then(res =>{
            return {success : true, data: res}
        })
        .catch(error =>{
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
        })
    }

    //CREAR CLIENTE
    @Post()
    save(@Body() cliente : Cliente){
        return this.clientesService.create(cliente)
        .then(res =>{
            return {success : true, data: res}
        })
        .catch(error =>{
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
        })
    } 
        
    //ACTUALIZAR CLIENTE
    @Put('/:id')
    update(@Param('id') id: string, @Body() cliente: Cliente) {
        return this.clientesService.update(+id, cliente)
            .then(res => {
                return { success: true, data: res };
            })
            .catch(error => {
                throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
            });
    }
    
    //ELIMINAR CLIENTE
    @Delete('/delete/:id')
    delete(@Param('id') id: number): Promise<any> {
        return this.clientesService.delete(id)
            .then(res => {
                return { success: true, data: res };
            })
            .catch(error => {
                throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
            });
    }
        
}
