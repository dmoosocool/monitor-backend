import { Module, DynamicModule, Global } from '@nestjs/common';
import { ConfigService } from './config.service';
import { ConfigToken } from './config.constants';
import { EnvConfig } from './config.interface';

@Global()
@Module({})
export class ConfigModule {
  static forRoot< T = EnvConfig>( filepath?: string, validator?: (envConfig: T) => T): DynamicModule {
    return {
      module: ConfigModule,
      providers: [
        {
          provide: ConfigService,
          useValue: new ConfigService( filepath || `${process.env.NODE_ENV || 'development'}.env`, validator),
        },
        {
          provide: ConfigToken,
          useFactory: () => new ConfigService( filepath || `${process.env.NODE_ENV || 'development'}.env`, validator),
        },
      ],
      exports: [
        ConfigService,
        ConfigToken,
      ],
    };
  }
}
