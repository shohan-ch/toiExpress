import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ToiletFeedback {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  clenliness_rating!: string;

  @Column("text")
  comments!: string;

  @Column({ length: 100 })
  status!: string;

  @Column()
  active!: boolean;
}
