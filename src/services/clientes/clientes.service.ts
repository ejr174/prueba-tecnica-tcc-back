import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from 'src/models/clientes.model';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class ClientesService {
    constructor(
        @InjectRepository(Cliente) private clientesRepository : Repository<Cliente>
    ){}

    async findAll() : Promise<Cliente[]>{
        return this.clientesRepository.query('EXEC sp_ReadCliente')
    }

    async create(cliente: Cliente): Promise<Cliente> {
        try {
            const savedCliente = await this.clientesRepository.save(cliente);
            return savedCliente;
        } catch (error) {
            console.error('Error al guardar el cliente:', error);
            throw error; 
        }
    }
    
    async update(id: number, cliente : Cliente) : Promise<UpdateResult>{
        return await this.clientesRepository.update(id, cliente)
    }        

    async delete(id : number) : Promise<string>{
        await this.clientesRepository.delete(id)
        return 'OK'
    }        
}
