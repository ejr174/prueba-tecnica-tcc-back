import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Clientes } from 'src/models/clientes.model';
import { Repository } from 'typeorm';

@Injectable()
export class ClientesService {
    constructor(
        @InjectRepository(Clientes) private clientesRepository : Repository<Clientes>
    ){}

    async findAll() : Promise<Clientes[]>{
        return await this.clientesRepository.find()
    }

    async create(cliente : Clientes) : Promise<Clientes>{
        return await this.clientesRepository.save(cliente)
    }    

    async update(cliente : Clientes) : Promise<Clientes>{
        return await this.clientesRepository.save(cliente)
    }        

    async delete(id : number) : Promise<string>{
        await this.clientesRepository.delete(id)

        return 'OK'
    }        
}
