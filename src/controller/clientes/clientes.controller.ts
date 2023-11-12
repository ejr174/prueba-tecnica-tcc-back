import { Controller, HttpException, HttpStatus, Get, Post, Put, Delete, Body, Param  } from '@nestjs/common';
import { ClientesService } from '../../services/clientes/clientes.service';
import { error } from 'console';
import { get } from 'http';
import { Clientes } from 'src/models/clientes.model';

@Controller('clientes')
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
    save(@Body() cliente : Clientes){
        return this.clientesService.create(cliente)
        .then(res =>{
            return {success : true, data: res}
        })
        .catch(error =>{
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
        })
    } 
    
    //ACTUALIZAR CLIENTE
    @Post('/uptdate')
    update(@Body() cliente : Clientes){
        return this.clientesService.update(cliente)
        .then(res =>{
            return {success : true, data: res}
        })
        .catch(error =>{
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
        })
    }     
    
    //ELIMINAR CLIENTE
    @Get('/delete/:id')
    delete(@Param('id') id){
        return this.clientesService.delete(id)
        .then(res =>{
            return {success : true, data: res}
        })
        .catch(error =>{
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
        })
    }      
}
