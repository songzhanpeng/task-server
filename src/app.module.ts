import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DemoModule } from './demo/demo.module';

@Module({
  imports: [UserModule, DemoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
