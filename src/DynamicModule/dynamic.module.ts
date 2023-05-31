import { DynamicController } from "./dynmicModule.service";
import { Dynamicservice } from "./dynamicModule.controller";
import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [DynamicController],
    providers: [Dynamicservice],
  })
  export class DynamicModule {

  }


