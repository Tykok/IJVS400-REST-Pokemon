<!-- A spacer -->
<p>&nbsp;</p>

<!-- Add your image here -->
<p align="center"><img src="https://1000marken.net/wp-content/uploads/2021/01/logo-Pokemon.png" width="80%"/></p>

<h2 align="center">Pokémon API (IJVS400)</h2>

A simple Pokémon API with CRUD.

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Getting Started](#getting-started)
- [Running from command line](#running-from-command-line)
  - [With Docker](#with-docker)
  - [Without docker](#without-docker)
- [Documentation](#documentation)

## Getting Started

To start this project, you need first clone it into a specific folder with this command :

```
git clone git@github.com:Tykok/IJVS400-REST-Pokemon.git
```

Next you need a CLI, and change directory to go at the root of the project who has cloned.

When it's ok, run all bottom commands at the root of the project.


```bash
# npm command
npm i

# yarn command
yarn
```

Next, build the project with `yarn` or `npm` :

```bash
# npm
npm run build

# yarn
yarn build
```

> This step will transform the TypeScript in JavaScript and put it into the `dist` directory.


## Running from command line

### With Docker

If you have a `docker` environment and can use the `docker-compose`  command it will be more easy.

Just run this command in your terminal :

```bash
# npm
npm run run:docker

# yarn
yarn run:docker
```

### Without docker

If you cann't use `docker-compose`, copy and paste the `.env.example` file in the root of the project and rename it `.env`.

> You also need to install a PostgreSQL Database and run it. Check the documentation [here](https://www.postgresql.org/download/).
> You need to have a user with all right on a database (name the database `pokemon` and the user `pokemon_user` for example).

> Next, just test the connexion for this user with `psql` command or with [PgAdmin](https://www.pgadmin.org/). Check the docs [here](https://www.postgresqltutorial.com/postgresql-getting-started/connect-to-postgresql-database/).

Next change the value of all value in the `.env` with yours and change the `database.config.json` value with yours.

> The `database.config.json` is the file used by Sequelize when we run migrations.

When you finally did it, run the `start.sh` script.

```bash
bash ./start.sh
```

If you can't run this script, run all this command one by one :

```bash
# Undo migrations / seeds (always)
npx sequelize-cli db:seed:undo:all
npx sequelize-cli db:migrate:undo

# Migrate and run seed
npx sequelize-cli db:migrate 
npx sequelize-cli db:seed:all

# Start the NodeJS server
npm run dev
```


## Documentation

Learn more about using [Pokémon API][projectLink], and check the Public documentation [here](https://documenter.getpostman.com/view/24354369/2s8ZDcyKDA)

- [Getting Started](#table-of-contents)
- [API Reference][DocAPILink]
- [Configuring][DocConfiguringLink]



[projectLink]: https://github.com/Tykok/IJVS400-REST-Pokemon
[licenseLink]: https://opensource.org/licenses/MIT
[contributingLink]: ./CONTRIBUTING.md
[codeOfCondutLink]: ./CODE_OF_CONDUCT.md
[DocAPILink]: ./docs/IJVS400%20Pokemon%20API.pdf
[DocConfiguringLink]: ./docs/CONFIG.md