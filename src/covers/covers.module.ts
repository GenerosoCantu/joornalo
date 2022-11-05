import { Module, HttpModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CoversController } from './covers.controller';
import { CoversService } from './covers.service';
import { CoverSchema } from './schemas/cover.schema';

@Module({
  imports: [HttpModule, MongooseModule.forFeature([{ name: 'Cover', schema: CoverSchema }])],
  controllers: [CoversController],
  providers: [CoversService],
})
export class CoversModule { }
