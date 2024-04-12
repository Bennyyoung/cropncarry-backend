import { registerAs } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { MixedList, EntitySchema } from "typeorm";
import { BaseDataSourceOptions } from "typeorm/data-source/BaseDataSourceOptions";

export default registerAs('database', () => {
  const config = {
    type: 'postgres',
    url: process.env.DATASOURCE_URL,
    autoLoadEntities: true,
    synchronize: false,
    // entities: ['dist/domain/**/*.entity.js'] as MixedList<string | Function | EntitySchema<any>>,
    // migrations: ['dist/database/migrations/*.js'] as MixedList<string | Function>
  } as const satisfies TypeOrmModuleOptions

  return config
})