import { Field, ObjectType, ID, InputType } from "type-graphql";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Article } from "./article";

@Entity()
@ObjectType()
@InputType()
export class Category {
  @PrimaryGeneratedColumn()
  @Field((_type) => ID)
  id!: number;

  @Column()
  @Field((_type) => String)
  name!: string;

  @ManyToMany(() => Article, (article) => article.category)
  @Field((_type) => [Article])
  articles?: Article[];
}
