import { Field, ObjectType, Int } from "type-graphql";
import { TypeormLoader } from "type-graphql-dataloader";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Article } from "./article";
import { Category } from "./category";
import { User } from "./user";

@Entity()
@ObjectType()
export class Feed {
  @PrimaryGeneratedColumn()
  @Field((_type) => Int)
  id!: number;

  @Column({ unique: true })
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

  @Column({ default: new Date("1970-01-01") })
  @Field((_type) => Date)
  lastPolledAt!: Date;

  @OneToMany(() => Article, (article) => article.feed)
  @Field((_type) => [Article])
  @TypeormLoader()
  articles?: Article[];

  @ManyToMany(() => Category, (category) => category.feeds)
  @JoinTable()
  @Field((_type) => [Category])
  @TypeormLoader()
  categories?: Category[];

  @ManyToMany(() => User, (user) => user.subscriptions)
  @Field((_type) => [User])
  @TypeormLoader()
  subscribers?: User[];
}
