import { Field, InputType, ObjectType } from "type-graphql";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Author, AuthorInput } from "./author";
import { Category } from "./category";
import { Feed, FeedInput } from "./feed";
import { User } from "./user";

@Entity()
@ObjectType()
export class Article {
  @PrimaryGeneratedColumn()
  @Field((_type) => Number)
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

  @ManyToOne(() => Author)
  @JoinColumn()
  @Field((_type) => Author)
  author!: Author;

  @ManyToOne(() => Feed)
  @JoinColumn()
  @Field((_type) => Feed)
  feed!: Feed;

  @ManyToMany(() => Category, (category) => category.id)
  @JoinTable()
  @Field((_type) => [Category])
  categories?: Category[];

  @ManyToMany(() => User, (user) => user.id)
  @Field((_type) => [User])
  likes?: User[];

  @ManyToMany(() => User, (user) => user.id)
  @Field((_type) => [User])
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
