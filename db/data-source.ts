import { DataBasesEnum } from 'src/enums/data-bases.enum';
import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  name: DataBasesEnum.POSTGRES,
  type: DataBasesEnum.POSTGRES,
  host: 'db',
  port: 5432,
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || 'nestpostgres',
  database: process.env.DB_NAME || 'users',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/db/migrations/*.js'],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
