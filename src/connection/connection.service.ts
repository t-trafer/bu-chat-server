import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection } from './entities/connection.entity';
import { CreateConnectionDto } from './dto/create-connection.dto';

@Injectable()
export class ConnectionService {
  constructor(
    @InjectRepository(Connection)
    private readonly connectionRepository: Repository<Connection>,
  ) {}

  create(createConnectionDto: CreateConnectionDto) {
    return this.connectionRepository.save(
      this.connectionRepository.create(createConnectionDto),
    );
  }

  findAll() {
    return this.connectionRepository.find();
  }

  findOne(id: number) {
    return this.connectionRepository.findOneBy({ id });
  }

  findUserConnection(userId: number) {
    return this.connectionRepository.findOneBy([
      { firstUserId: userId },
      { secondUserId: userId },
    ]);
  }

  remove(id: number) {
    return this.connectionRepository.delete(id);
  }
}
