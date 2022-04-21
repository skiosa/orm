import { Field, ID, InputType, Int, ObjectType } from "type-graphql";
import { TypeormLoader } from "type-graphql-dataloader";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Article } from "./article";

@Entity()
@ObjectType()
export class Author {
  @PrimaryGeneratedColumn()
  @Field((_type) => Int)
  id!: number;

  @Column()
  @Field((_type) => String)
  name!: string;

  @OneToMany(() => Article, (article) => article.author)
  @Field((_type) => [Article])
  @TypeormLoader()
  articles?: Article[];
}
