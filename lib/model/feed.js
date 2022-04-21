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
exports.Feed = void 0;
const type_graphql_1 = require("type-graphql");
const type_graphql_dataloader_1 = require("type-graphql-dataloader");
const typeorm_1 = require("typeorm");
const article_1 = require("./article");
const category_1 = require("./category");
const user_1 = require("./user");
let Feed = class Feed {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, type_graphql_1.Field)((_type) => type_graphql_1.Int),
    __metadata("design:type", Number)
], Feed.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    (0, type_graphql_1.Field)((_type) => String),
    __metadata("design:type", String)
], Feed.prototype, "link", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, type_graphql_1.Field)((_type) => String),
    __metadata("design:type", Number)
], Feed.prototype, "ttl", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, type_graphql_1.Field)((_type) => String),
    __metadata("design:type", String)
], Feed.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, type_graphql_1.Field)((_type) => String),
    __metadata("design:type", String)
], Feed.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => article_1.Article, (article) => article.feed),
    (0, type_graphql_1.Field)((_type) => [article_1.Article]),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    __metadata("design:type", Array)
], Feed.prototype, "articles", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => category_1.Category, (category) => category.feeds),
    (0, typeorm_1.JoinTable)(),
    (0, type_graphql_1.Field)((_type) => [category_1.Category]),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    __metadata("design:type", Array)
], Feed.prototype, "categories", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => user_1.User, (user) => user.subscriptions),
    (0, type_graphql_1.Field)((_type) => [user_1.User]),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    __metadata("design:type", Array)
], Feed.prototype, "subscribers", void 0);
Feed = __decorate([
    (0, typeorm_1.Entity)(),
    (0, type_graphql_1.ObjectType)()
], Feed);
exports.Feed = Feed;
