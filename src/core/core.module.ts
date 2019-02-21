import { Module } from '@nestjs/common';
import { ConfigModule, EnvConfig, ConfigService, ConfigValidate } from '../config';
@Module({
  imports: [
    ConfigModule.forRoot<EnvConfig>(null, ConfigValidate.validateInput),
  ],
})
export class CoreModule {}
