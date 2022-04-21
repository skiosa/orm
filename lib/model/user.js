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
exports.User = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const feed_1 = require("./feed");
const article_1 = require("./article");
const category_1 = require("./category");
const type_graphql_dataloader_1 = require("type-graphql-dataloader");
let User = class User {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    (0, type_graphql_1.Field)((_type) => type_graphql_1.ID),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => feed_1.Feed, (feed) => feed.subscribers),
    (0, typeorm_1.JoinTable)(),
    (0, type_graphql_1.Field)((_type) => [feed_1.Feed]),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    __metadata("design:type", Array)
], User.prototype, "subscriptions", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => article_1.Article, (article) => article.bookmarks),
    (0, typeorm_1.JoinTable)(),
    (0, type_graphql_1.Field)((_type) => [article_1.Article]),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    __metadata("design:type", Array)
], User.prototype, "bookmarks", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => article_1.Article, (article) => article.likes),
    (0, typeorm_1.JoinTable)(),
    (0, type_graphql_1.Field)((_type) => [article_1.Article]),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    __metadata("design:type", Array)
], User.prototype, "likes", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => category_1.Category),
    (0, typeorm_1.JoinTable)(),
    (0, type_graphql_1.Field)((_type) => [category_1.Category]),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    __metadata("design:type", Array)
], User.prototype, "preferences", void 0);
User = __decorate([
    (0, typeorm_1.Entity)(),
    (0, type_graphql_1.ObjectType)()
], User);
exports.User = User;
