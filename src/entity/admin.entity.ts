import { Exclude } from 'class-transformer';
import { Column, Entity } from 'typeorm';
import { Base } from './base';

enum ROLE {
  SUPERADMIN = 'SUPERADMIN',
  USER = 'USER'
}

@Entity('admin')
export class Admin extends Base {
  @Column()
  email: string;

  @Exclude({ toPlainOnly: true })
  @Column()
  password: string;

  @Column({ enum: ROLE })
  role: ROLE;
}
