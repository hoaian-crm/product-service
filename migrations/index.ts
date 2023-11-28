import { config } from 'dotenv';
import { DataSource } from 'typeorm';
// import { AddTableMail1700555976577 } from './1700555976577-AddTableMail';
import { ProductsTable1701177454295 } from './1701177454295-products-table';
config();

export default new DataSource({
  type: 'postgres',
  host: process.env.PG_HOST,
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  port: +process.env.PG_PORT,
  entities: [],
  migrations: [ProductsTable1701177454295],
});
