import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { ConfigService } from './config';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config: ConfigService<any> = app.get(ConfigService);

  // 启动监听3000端口 浏览器访问 http://localhost:3000
  await app.listen(config.getNumber('PORT'), config.get('HOST'), () => {
    Logger.log(`server is runing at ${config.get('HOST')}:${config.get('PORT')}`);
  });
  if ( module.hot ) {
    module.hot.accept();
    module.hot.dispose( () => app.close() );
  }
}
bootstrap();
