import { IsNumber } from 'class-validator';

export class CreateConnectionDto {
  @IsNumber()
  firstUserId: number;

  @IsNumber()
  secondUserId: number;
}
