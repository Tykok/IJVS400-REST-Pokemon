# Prerequisites

**Required** :
- Node (version >=16)
- npm (version >=8)
- yarn
- Git Bash (if you are on Windows OS)

**Optional** :
- Docker
- Docker-compose

# Start project
## Without Docker

To start project without docker, you should firstly have a PostgreSQL service.

Connect to PostgreSQL and create a database with UTF-8 encoding, and optionally you can create a user with grant privileges to connect to the database.

Next, copy the `.env.example` file and name it `.env`. Into this file, complete the value of each variables with your.

Here is an example :

```
NODE_ENV="DEV"
DB_NAME="DB_TEST"
DB_PASSWORD="test"
DB_USER="test"
DB_HOST="localhost"
DB_PORT="5432"
```

> Use Git Bash to run every commands.

Next, you can start your application with the command : `yarn run:dev` :).

## With Docker

Just need to run this command : `yarn run:docker` to run each containers. 

The NodeJS application should be on the **port 8080** and the PostgreSQL service should be on the **port 2345**.