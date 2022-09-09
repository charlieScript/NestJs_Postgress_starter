import { Exclude } from "class-transformer";
import { Column, Entity, } from "typeorm";
import { Base } from "./base";

@Entity()
export class User extends Base {
  @Column()
  email: string;


  @Exclude({ toPlainOnly: true })
  @Column()
  password: string;
}