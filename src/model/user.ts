import { Field, ID, InputType, ObjectType } from "type-graphql";
import { Column, Entity, ManyToMany, PrimaryColumn, JoinTable } from "typeorm";
import { Feed } from "./feed";
import { Article } from "./article";
import { Category } from "./category";
import { TypeormLoader } from "type-graphql-dataloader";

@Entity()
@ObjectType()
export class User {
  @PrimaryColumn()
  @Field((_type) => ID)
  id!: string;

  @ManyToMany(() => Feed, (feed) => feed.subscribers)
  @JoinTable()
  @Field((_type) => [Feed])
  @TypeormLoader()
  subscriptions?: Feed[];

  @ManyToMany(() => Article, (article) => article.bookmarks)
  @JoinTable()
  @Field((_type) => [Article])
  @TypeormLoader()
  bookmarks?: Article[];

  @ManyToMany(() => Article, (article) => article.likes)
  @JoinTable()
  @Field((_type) => [Article])
  @TypeormLoader()
  likes?: Article[];

  @ManyToMany(() => Category)
  @JoinTable()
  @Field((_type) => [Category])
  @TypeormLoader()
  preferences?: Category[];
}

@InputType()
export class InputUser implements Partial<User> {
  @Field((type) => ID)
  id!: string;
}
