import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
  ) {}

  create(createMessageDto: CreateMessageDto) {
    return this.messageRepository.save(
      this.messageRepository.create(createMessageDto),
    );
  }

  findAll(): Promise<Message[]> {
    return this.messageRepository.find();
  }

  findAllByConnectionId(connectionId: number): Promise<Message[]> {
    return this.messageRepository.find({
      where: { connection: connectionId },
    });
  }

  findOne(id: number): Promise<Message> {
    return this.messageRepository.findOneBy({ id });
  }

  update(id: number, updateMessageDto: UpdateMessageDto) {
    return this.messageRepository.update(id, updateMessageDto);
  }

  remove(id: number) {
    return this.messageRepository.delete(id);
  }
}
