import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ length: 20 })
  email!: string;

  @Column({ length: 50 })
  password!: string;

  @Column()
  active!: boolean;
}
