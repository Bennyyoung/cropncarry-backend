import { DataSource } from "typeorm"
import dotenv from 'dotenv'
import dotenvExpand from 'dotenv-expand'

dotenvExpand.expand(dotenv.config())

export default new DataSource({
  type: 'postgres',
  url: process.env.DATASOURCE_URL,
  entities: ['dist/domain/**/*.entity.js'],
  migrations: ['dist/database/migrations/*/.js'],
})