import { Article } from "./article";
export declare class Author {
    id: number;
    name: string;
    articles?: Article[];
}
export declare class AuthorInput implements Partial<Author> {
    id: number;
    name: string;
}
