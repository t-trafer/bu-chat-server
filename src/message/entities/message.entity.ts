import { Connection } from 'src/connection/entities/connection.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  // @Column()
  // time: number;

  // @Column()
  // status: string;

  @ManyToOne(() => User, (user) => user.sentMessages)
  sender: number;

  @ManyToOne(() => User, (user) => user.receivedMessages)
  receiver: number;

  @ManyToOne(() => Connection, (connection) => connection.messages)
  connection: number;
}
