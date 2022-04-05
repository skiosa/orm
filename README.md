# orm
ORM for Skiosa with TypeORM.
This Repo exposes a private NPM Package witch can be used by the other Services

This Module exports ORM classes with the GraphQL decorators

## New Versions

For each new Version follow these steps:
 * create a tag with git tag vx.x.x -m "Message"
 * push all Tags and commits git push && git push --tags
 * Create PR
 * If PR is Merged update all (needed) Services with this module as Dependency:
   * Search in package.json for "skiosa-orm"
   * Update git path to new Tag "skiosa-orm": "git+.../orm.git#vx.x.x"