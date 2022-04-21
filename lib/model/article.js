"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Article = void 0;
const type_graphql_1 = require("type-graphql");
const type_graphql_dataloader_1 = require("type-graphql-dataloader");
const typeorm_1 = require("typeorm");
const author_1 = require("./author");
const category_1 = require("./category");
const feed_1 = require("./feed");
const user_1 = require("./user");
let Article = class Article {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, type_graphql_1.Field)((_type) => type_graphql_1.Int),
    __metadata("design:type", Number)
], Article.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, type_graphql_1.Field)((_type) => String),
    __metadata("design:type", String)
], Article.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, type_graphql_1.Field)((_type) => String),
    __metadata("design:type", String)
], Article.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, type_graphql_1.Field)((_type) => String),
    __metadata("design:type", String)
], Article.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, type_graphql_1.Field)((_type) => String),
    __metadata("design:type", String)
], Article.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: new Date() }),
    (0, type_graphql_1.Field)((_type) => Date),
    __metadata("design:type", Date)
], Article.prototype, "publishedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => author_1.Author, (author) => author.articles),
    (0, typeorm_1.JoinColumn)(),
    (0, type_graphql_1.Field)((_type) => author_1.Author),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    __metadata("design:type", author_1.Author)
], Article.prototype, "author", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => feed_1.Feed, (feed) => feed.articles),
    (0, typeorm_1.JoinColumn)(),
    (0, type_graphql_1.Field)((_type) => feed_1.Feed),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    __metadata("design:type", feed_1.Feed)
], Article.prototype, "feed", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => category_1.Category, (category) => category.articles),
    (0, typeorm_1.JoinTable)(),
    (0, type_graphql_1.Field)((_type) => [category_1.Category]),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    __metadata("design:type", Array)
], Article.prototype, "categories", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => user_1.User, (user) => user.likes),
    (0, type_graphql_1.Field)((_type) => [user_1.User]),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    __metadata("design:type", Array)
], Article.prototype, "likes", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => user_1.User, (user) => user.bookmarks),
    (0, type_graphql_1.Field)((_type) => [user_1.User]),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    __metadata("design:type", Array)
], Article.prototype, "bookmarks", void 0);
Article = __decorate([
    (0, typeorm_1.Entity)(),
    (0, type_graphql_1.ObjectType)()
], Article);
exports.Article = Article;
