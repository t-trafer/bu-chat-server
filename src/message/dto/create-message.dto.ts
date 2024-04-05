import { IsString, IsNumber } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  content: string;

  @IsNumber()
  senderId: number;

  @IsNumber()
  receiverId: number;

  @IsNumber()
  connectionId: number;
}
