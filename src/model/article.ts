import { Field, ID, InputType, Int, ObjectType } from "type-graphql";
import { TypeormLoader } from "type-graphql-dataloader";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Author, AuthorInput } from "./author";
import { Category } from "./category";
import { Feed } from "./feed";
import { User } from "./user";

@Entity()
@ObjectType()
export class Article {
  @PrimaryGeneratedColumn()
  @Field((_type) => Int)
  id!: number;

  @Column()
  @Field((_type) => String)
  title!: string;

  @Column()
  @Field((_type) => String)
  description!: string;

  @Column()
  @Field((_type) => String)
  content!: string;

  @Column()
  @Field((_type) => String)
  url!: string;

  @ManyToOne(() => Author, (author) => author.articles)
  @JoinColumn()
  @Field((_type) => Author)
  @TypeormLoader()
  author!: Author;

  @ManyToOne(() => Feed, (feed) => feed.articles)
  @JoinColumn()
  @Field((_type) => Feed)
  @TypeormLoader()
  feed!: Feed;

  @ManyToMany(() => Category, (category) => category.articles)
  @JoinTable()
  @Field((_type) => [Category])
  @TypeormLoader()
  categories?: Category[];

  @ManyToMany(() => User, (user) => user.likes)
  @Field((_type) => [User])
  @TypeormLoader()
  likes?: User[];

  @ManyToMany(() => User, (user) => user.bookmarks)
  @Field((_type) => [User])
  @TypeormLoader()
  bookmarks?: [User];
}

@InputType()
export class ArticleInput implements Partial<Article> {
  @Field((_type) => String)
  title!: string;

  @Field((_type) => String)
  description!: string;

  @Field((_type) => String)
  content!: string;

  @Field((_type) => String)
  url!: string;

  @Field((_type) => AuthorInput)
  author!: AuthorInput;

  @Field((_type) => Feed)
  feed!: Feed;
}
