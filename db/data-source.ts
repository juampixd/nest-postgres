import { DataBasesEnum } from 'src/enums/data-bases.enum';
import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  name: DataBasesEnum.POSTGRES,
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password: 'nestpostgres',
  database: 'nestdb',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/db/migrations/*.js'],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
