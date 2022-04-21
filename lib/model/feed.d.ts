import { Article } from "./article";
import { Category } from "./category";
import { User } from "./user";
export declare class Feed {
    id: number;
    link: string;
    ttl: number;
    name: string;
    description: string;
    articles?: Article[];
    categories?: Category[];
    subscribers?: User[];
}
