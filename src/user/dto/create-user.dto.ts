import { IsIP, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;
}

export class IPDto {
  @IsIP()
  ip: string;
}
