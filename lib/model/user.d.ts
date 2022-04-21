import { Feed } from "./feed";
import { Article } from "./article";
import { Category } from "./category";
export declare class User {
    id: string;
    subscriptions?: Feed[];
    bookmarks?: Article[];
    likes?: Article[];
    preferences?: Category[];
}
