"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
const typeorm_1 = require("typeorm");
const article_1 = require("./model/article");
const author_1 = require("./model/author");
const feed_1 = require("./model/feed");
const category_1 = require("./model/category");
const user_1 = require("./model/user");
exports.dataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    port: +(process.env.POSTGRES_PORT || 5432),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    synchronize: true,
    logging: false,
    entities: [article_1.Article, author_1.Author, feed_1.Feed, category_1.Category, user_1.User],
    subscribers: [],
    migrations: [],
});
