import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildTypeDefsAndResolvers } from "type-graphql";
import { ArticleResolver } from "../../src/resolver/articleResolver";
import { makeExecutableSchema } from "@graphql-tools/schema";

const app = express();
bootstrap();

async function bootstrap() {
  const { typeDefs, resolvers } = await buildTypeDefsAndResolvers({
    resolvers: [ArticleResolver],
  });

  const schema = makeExecutableSchema({ typeDefs, resolvers });

  /**
   * Main GraphQL Route to Serve GraphQL
   */
  app.use(
    "/",
    graphqlHTTP({
      schema: schema,
      graphiql: true,
    })
  );
}

app.listen(process.env.DEV_PORT, () => {
  console.log(`GraphQL test Running at http://localhost:${process.env.DEV_PORT}`);
});
