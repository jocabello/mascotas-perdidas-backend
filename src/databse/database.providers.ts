import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: process.env.DB_TYPE as any,
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_TYPE,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        //Setting synchronize: true shouldn't be used in production - otherwise you can lose production data.
        synchronize: true,
      });

      try {
        await dataSource.initialize();
        console.log('Database connection established successfully');
      } catch (error) {
        console.log('Error establishing database connection:', error);
      }
      return dataSource;
    },
  },
];
