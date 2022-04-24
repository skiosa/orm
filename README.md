# skiosa-orm
ORM for Skiosa with TypeORM.
This Repo exposes a private NPM Package witch can be used by the other Services

This Module exports ORM classes with the GraphQL decorators


## Usage
This ORM Package works with Postgres so a Postgres Database is required.

### NPM install
To install this package use the following command:
```
npm i git@github.com:skiosa/orm.git#<version-tag>
```
version-tag is optional and can be used to install a specific version of the package.

Use `npm update` to update the package.

*We will use a specific Version. To update the Version the easiest way to update is remove the package and reinstall it with the new Version tag*

### Usage in the Service
To use the ORM in the Service, import the ORM classes and the ORM module.
You have to set following environment variables to ensure connection to the database:
```
 - POSTGRES_HOST
 - POSTGRES_PORT
 - POSTGRES_USER
 - POSTGRES_PASSWORD
 - POSTGRES_DB
```
## Development

### Devcontainer
This repository has a Dockerfile and a Docker Compose file. These are Visual Studio Devcontainers.
With the [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension you can connect to the Docker Containers.

### Linting
This repository has a [.eslintrc](.eslintrc) file. Run eslint with `npm run lint`

### Formating
This repository has a [.prettierrc](.prettierrc) file. Run prettier with `npm run format`

### Testing
This repository has test files. Run tests with `npm test`.
Testing is done with mocha and chai.

(Testing is not yet implemented)

### Build
To build the project run `npm run build`

### Publish
To push a new version to git use `npm version <version>`
For documentation of `version` look [here](https://docs.npmjs.com/cli/version)
Remember to push both commits and tags to git.
