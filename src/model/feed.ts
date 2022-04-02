import { Field, ObjectType, ID, InputType } from "type-graphql";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Article } from "./article";

@Entity()
@ObjectType()
export class Feed {
  @PrimaryGeneratedColumn()
  @Field((_type) => ID)
  id!: number;

  @Column()
  @Field((_type) => String)
  link!: string;

  @Column()
  @Field((_type) => String)
  ttl!: number;

  @OneToMany(() => Article, (article) => article.id)
  @Field((_type) => [Article])
  articles?: Article[];
}

@InputType()
export class FeedInput implements Partial<Feed> {
  @Field((_type) => ID)
  id!: number;

  @Field((_type) => String)
  link!: string;

  @Field((_type) => String)
  ttl!: number;
}
