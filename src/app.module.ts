import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { FilesModule } from './files/files.module';
import { CoversModule } from './covers/covers.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { SectionsModule } from './sections/sections.module';
import { ModulesModule } from './modules/modules.module';
import { NewsModule } from './news/news.module';
import config from './config/keys'
@Module({
  imports: [MongooseModule.forRoot(config.mongoURI), AuthModule, UsersModule, SectionsModule, ModulesModule, NewsModule, CoversModule, ItemsModule, FilesModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule { }
