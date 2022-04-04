import { Author, AuthorInput } from "./author";
import { Category } from "./category";
import { Feed } from "./feed";
import { User } from "./user";
export declare class Article {
    id: number;
    title: string;
    description: string;
    content: string;
    url: string;
    author?: Author;
    feed?: Feed;
    categories?: Category[];
    likes?: User[];
    bookmarks?: [User];
}
export declare class ArticleInput implements Partial<Article> {
    title: string;
    description: string;
    content: string;
    url: string;
    author: AuthorInput;
    feed: Feed;
}
