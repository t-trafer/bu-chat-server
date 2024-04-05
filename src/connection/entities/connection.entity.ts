import { Message } from 'src/message/entities/message.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Connection {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User)
  @JoinColumn()
  firstUser: number;

  @OneToOne(() => User)
  @JoinColumn()
  secondUser: number;

  @OneToMany(() => Message, (message) => message.connection)
  messages: Message[];
}
