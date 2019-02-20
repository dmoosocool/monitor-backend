import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from './config';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.init();
  // const config: ConfigService<any> = app.get(ConfigService);
  // const config: ConfigService<any> = app.get( ConfigService );
  console.log(ConfigService);
  await app.listen(3000);
}
bootstrap();
