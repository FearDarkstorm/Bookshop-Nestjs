import { NestFactory, REQUEST } from '@nestjs/core';
import { RootModule } from './root.module';
import { NextFunction,Request,Response } from 'express';


//HERE WE are importing for root method which we created in our root module class
async function bootstrap() {
  const app = await NestFactory.create(await RootModule.forRoot());
  await app.listen(3000);

}
bootstrap();
