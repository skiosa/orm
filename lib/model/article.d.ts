import { Author } from "./author";
import { Category } from "./category";
import { Feed } from "./feed";
import { User } from "./user";
export declare class Article {
    id: number;
    title: string;
    description: string;
    content: string;
    url: string;
    publishedAt: Date;
    author?: Author;
    feed?: Feed;
    categories?: Category[];
    likes?: User[];
    bookmarks?: [User];
}
