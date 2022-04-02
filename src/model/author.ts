import { Field, ID, InputType, ObjectType } from "type-graphql";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Article } from "./article";

@Entity()
@ObjectType()
export class Author {
  @PrimaryGeneratedColumn()
  @Field((_type) => ID)
  id!: number;

  @Column()
  @Field((_type) => String)
  name!: string;

  @OneToMany(() => Article, (article) => article.id)
  @Field((_type) => [Article])
  article?: Article[];
}

@InputType()
export class AuthorInput implements Partial<Author> {
  @Field((_type) => ID)
  id!: number;

  @Field((_type) => String)
  name!: string;
}
