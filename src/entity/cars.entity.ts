import { Exclude } from 'class-transformer';
import { BeforeInsert, Column, Entity } from 'typeorm';
import { Base } from './base';

@Entity('cars')
export class Cars extends Base {

  @Column()
  model: string;

}
