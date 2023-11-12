import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from 'src/models/clientes.model';
import { Repository } from 'typeorm';

@Injectable()
export class ClientesService {
    constructor(
        @InjectRepository(Cliente) private clientesRepository : Repository<Cliente>
    ){}

    async findAll() : Promise<Cliente[]>{
        return await this.clientesRepository.find()
    }

    async create(cliente : Cliente) : Promise<Cliente>{
        return await this.clientesRepository.save(cliente)
    }    

    async update(cliente : Cliente) : Promise<Cliente>{
        return await this.clientesRepository.save(cliente)
    }        

    async delete(id : number) : Promise<string>{
        await this.clientesRepository.delete(id)

        return 'OK'
    }        
}
