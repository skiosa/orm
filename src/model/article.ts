import { Field, ID, InputType, Int, ObjectType } from "type-graphql";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Author, AuthorInput } from "./author";
import { Category } from "./category";
import { Feed, FeedInput } from "./feed";

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
  url!: string;

  @OneToOne(() => Author)
  @JoinColumn()
  @Field((_type) => Author)
  author!: Author;

  @OneToOne(() => Feed)
  @JoinColumn()
  @Field((_type) => Feed)
  feed!: Feed;

  @ManyToMany(() => Category, (category) => category.id)
  @JoinTable()
  @Field((_type) => [Category])
  category?: Category[];
}

@InputType()
export class ArticleInput implements Partial<Article> {
  @Field((_type) => Number)
  id!: number;

  @Field((_type) => String)
  title!: string;

  @Field((_type) => String)
  description!: string;

  @Field((_type) => String)
  url!: string;

  @Field((_type) => AuthorInput)
  author!: AuthorInput;

  @Field((_type) => FeedInput)
  feed!: FeedInput;
}
