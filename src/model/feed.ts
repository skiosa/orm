import { Field, ObjectType, ID, InputType } from "type-graphql";
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Article } from "./article";
import { Category } from "./category";

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

  @Column()
  @Field((_type) => String)
  name!: string;

  @Column()
  @Field((_type) => String)
  description!: string;

  @OneToMany(() => Article, (article) => article.id)
  @Field((_type) => [Article])
  articles?: Article[];

  @ManyToMany(() => Category, (category) => category.id)
  @Field((_type) => [Category])
  category?: Category[];
}

@InputType()
export class FeedInput implements Partial<Feed> {
  @Field((_type) => String)
  link!: string;

  @Field((_type) => String)
  ttl!: number;

  @Field((_type) => String)
  name!: string;

  @Field((_type) => String)
  description!: string;
}
