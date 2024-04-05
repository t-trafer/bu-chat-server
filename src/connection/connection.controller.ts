import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ConnectionService } from './connection.service';
import { CreateConnectionDto } from './dto/create-connection.dto';

@Controller('connection')
export class ConnectionController {
  constructor(private readonly connectionService: ConnectionService) {}

  @Post()
  create(@Body() createConnectionDto: CreateConnectionDto) {
    return this.connectionService.create(createConnectionDto);
  }

  @Get()
  findAll() {
    return this.connectionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.connectionService.findOne(+id);
  }

  @Get('user/:userId')
  findUserConnection(@Param('userId') userId: string) {
    return this.connectionService.findUserConnection(+userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.connectionService.remove(+id);
  }
}
