import { use } from "chai";
import { Field, ObjectType, ID, InputType, Int } from "type-graphql";
import { TypeormLoader } from "type-graphql-dataloader";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Article } from "./article";
import { Feed } from "./feed";
import { User } from "./user";

@Entity()
@ObjectType()
export class Category {
  @PrimaryGeneratedColumn()
  @Field((_type) => Int)
  id!: number;

  @Column()
  @Field((_type) => String)
  name!: string;

  @ManyToMany(() => Article, (article) => article.categories)
  @Field((_type) => [Article])
  @TypeormLoader()
  articles?: Article[];

  @ManyToMany(() => Feed, (feed) => feed.categories)
  @Field((_type) => [Feed])
  @TypeormLoader()
  feeds?: Feed[];

  @ManyToMany(() => User, (user) => user.preferences)
  @Field((_type) => [User])
  @TypeormLoader()
  users?: User[];
}

@InputType()
export class InputCategory implements Partial<Category> {
  @Field((_type) => String)
  name!: string;
}
