import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountsModule } from '../accounts/accounts.module';
import { Accounts } from 'src/entity/accounts.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { scheduled } from 'rxjs';
import { Posts } from 'src/entity/posts.entity';
import { BlogSpots } from 'src/entity/BlogSpots.entity';
import { Blogs } from 'src/entity/blogs.entity';

@Module({
  imports: [
    AccountsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'blogger_spot',
      entities: [Accounts,Posts,BlogSpots,Blogs],
      synchronize: true,
    }),
   
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
