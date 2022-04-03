import { FieldResolver, Query, Resolver, Root } from "type-graphql";
import { Loader } from "type-graphql-dataloader";
import { Article } from "../model/article";
import { Category } from "../model/category";
import { dataSource } from "../db";
import { In, JoinColumn } from "typeorm";

@Resolver(Article)
export class ArticleResolver {
  @FieldResolver((type) => [Category])
  categories(): Category[] {
    return [{ id: 1, name: "Test" }];
  }
  @Query((returns) => [Article])
  articles(): Promise<Article[]> {
    return new Promise<Article[]>((resolve, _reject) => {
      resolve([
        {
          id: 1,
          title: "Test",
          description: "Lorem Ipsum",
          content: "Ich bin ein Blindtext",
          url: "test.com",
          author: { id: 1, name: "Max Mustermann" },
          feed: { id: 1, link: "test.com", ttl: 120, name: "Testfeed", description: "Test" },
        },
      ]);
    });
  }
}
