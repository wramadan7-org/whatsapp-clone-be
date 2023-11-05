import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false })
  first_name: string;

  @Column({ type: 'varchar', nullable: false })
  last_name: string;

  @Column({ type: 'varchar', nullable: true })
  profile: string | null;

  @Column({ type: 'varchar', nullable: true })
  info: string | null;

  @Column('date')
  last_update_info: Date;

  @Column({ type: 'varchar', nullable: false })
  phone_number: string;
}
