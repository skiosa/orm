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
exports.CategoryInput = exports.Category = void 0;
const type_graphql_1 = require("type-graphql");
const type_graphql_dataloader_1 = require("type-graphql-dataloader");
const typeorm_1 = require("typeorm");
const article_1 = require("./article");
const feed_1 = require("./feed");
const user_1 = require("./user");
let Category = class Category {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, type_graphql_1.Field)((_type) => type_graphql_1.Int),
    __metadata("design:type", Number)
], Category.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, type_graphql_1.Field)((_type) => String),
    __metadata("design:type", String)
], Category.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => article_1.Article, (article) => article.categories),
    (0, type_graphql_1.Field)((_type) => [article_1.Article]),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    __metadata("design:type", Array)
], Category.prototype, "articles", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => feed_1.Feed, (feed) => feed.categories),
    (0, type_graphql_1.Field)((_type) => [feed_1.Feed]),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    __metadata("design:type", Array)
], Category.prototype, "feeds", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => user_1.User, (user) => user.preferences),
    (0, type_graphql_1.Field)((_type) => [user_1.User]),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    __metadata("design:type", Array)
], Category.prototype, "users", void 0);
Category = __decorate([
    (0, typeorm_1.Entity)(),
    (0, type_graphql_1.ObjectType)()
], Category);
exports.Category = Category;
let CategoryInput = class CategoryInput {
};
__decorate([
    (0, type_graphql_1.Field)((_type) => String),
    __metadata("design:type", String)
], CategoryInput.prototype, "name", void 0);
CategoryInput = __decorate([
    (0, type_graphql_1.InputType)()
], CategoryInput);
exports.CategoryInput = CategoryInput;
