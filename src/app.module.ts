import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost:27017/resimple',
      database: 'resimple',
      entities: [__dirname + '/**/*.entity.{ts,js}'],
      synchronize: true,
    }),
    CompanyModule,
  ],
})
export class AppModule {}
