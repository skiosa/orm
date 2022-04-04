import { Article, ArticleInput } from "../model/article";

export const articleService = new class {
    getArticles(): Promise<Article[]> {
        throw new Error("Not yet implemented");
    }
    getArticle(id: number): Promise<Article | null> {
        throw new Error("Not yet implemented");
    }
    addArticle(article: ArticleInput): Promise<Article> {
        throw new Error("Not yet implemented");
    }
    deleteArticle(id: number): Promise<Boolean> {
        throw new Error("Not yet implemented");
    }
    updateArticle(id: number, article: Partial<Article>): Promise<Article> {
        throw new Error("Not yet implemented");
    }
}();