import { Module } from '@nestjs/common';
import { DynamicModule } from './DynamicModule/dynamic.module';

///code to load our dynamic module 

//we initialize the loader using module decorator
@Module({})

//here we create a instance of class dynamic loader  
//load static method is defined which is async funnction that returns a rpomuise
//here we are impoorting our dynamic module 
export class DynamicModuleLoader {
  static async load(): Promise<any> {
    const dynamicModule = await import('./DynamicModule/dynamic.module');
    return dynamicModule.DynamicModule;
  }
}
