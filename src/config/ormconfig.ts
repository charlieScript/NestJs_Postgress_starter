import { config,postgresConfig } from "./config";
import { DataSource } from "typeorm";


const db = new DataSource(postgresConfig)

export default db;