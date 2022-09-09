import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions"
import * as dotenv from "dotenv";
import * as path from "path";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
const dotenv_path = path.resolve(process.cwd(), `.env`);
dotenv.config({ path: dotenv_path });

const config: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  entities: ['dist/src/**/*.entity.js'],
  synchronize: false,
  migrations: ['dist/src/**/migrations/*.js'],
};

const postgresConfig: PostgresConnectionOptions = {
  type: 'postgres',
  url: process.env.URL,
  entities: ['dist/src/**/*.entity.js'],
  synchronize: false,
  migrations: ['dist/src/**/migrations/*.js'],
};


const AppDbConfig = {
  ...postgresConfig
}

export {
  AppDbConfig,
  config,
  postgresConfig
};