import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

enum Status {
  Pending = 'pending',
  Error = 'error',
  Success = 'success',
}

@Entity({ name: 'chats' })
export class MessageEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'personal_id', type: 'int', nullable: false })
  personalId: number;

  @Column({ name: 'interlocutors_id', type: 'int', nullable: false })
  interlocutorsId: number;

  @Column({ name: 'message', type: 'varchar', nullable: false })
  message: string;

  @Column({ name: 'is_read', type: 'boolean', nullable: true, default: false })
  isRead: boolean;

  @Column({ name: 'is_send', type: 'boolean', nullable: true, default: false })
  isSend: boolean;

  @Column({
    name: 'is_receive',
    type: 'boolean',
    nullable: true,
    default: false,
  })
  isReceive: boolean;

  @Column({
    name: 'status',
    type: 'enum',
    enum: Status,
    nullable: false,
    default: 'pending',
  })
  status: Status;

  @Column({ name: 'created_at', default: () => 'CURRENT_TIMESTAMP' }) // Define createdAt column manually
  createdAt: Date;

  @Column({
    name: 'updated_at',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  }) // Define updatedAt column manually
  updatedAt: Date;

  constructor() {
    this.status = Status.Pending; // Set default value in the constructor
  }
}
