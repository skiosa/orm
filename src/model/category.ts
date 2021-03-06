import { Field, ObjectType, Int } from "type-graphql";
import { TypeormLoader } from "type-graphql-dataloader";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Article } from "./article";
import { Feed } from "./feed";
import { User } from "./user";

@Entity()
@ObjectType()
export class Category {
  @PrimaryGeneratedColumn()
  @Field((_type) => Int)
  id!: number;

  @Column({ unique: true })
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
