import { Article } from "./article";
import { Feed } from "./feed";
import { User } from "./user";
export declare class Category {
    id: number;
    name: string;
    articles?: Article[];
    feeds?: Feed[];
    users?: User[];
}
