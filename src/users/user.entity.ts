import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'first_name', type: 'varchar', nullable: false })
  firstName: string;

  @Column({ name: 'last_name', type: 'varchar', nullable: false })
  lastName: string;

  @Column({ type: 'varchar', nullable: true })
  profile: string | null;

  @Column({ type: 'varchar', nullable: true })
  info: string | null;

  @Column({ name: 'last_update_info', type: 'date' })
  lastUpdateInfo: Date;

  @Column({ name: 'phone_number', type: 'varchar', nullable: false })
  phoneNumber: string;

  @Column({ name: 'created_at', default: () => 'CURRENT_TIMESTAMP' }) // Define createdAt column manually
  createdAt: Date;

  @Column({
    name: 'updated_at',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  }) // Define updatedAt column manually
  updatedAt: Date;
}
