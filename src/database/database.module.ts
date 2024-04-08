import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        url: process.env.DATASOURCE_URL,
        autoLoadEntities: true,
        synchronize: true, // Not recommeded for production environment
      })
    })
  ]
})

export class DatabaseModule { }
