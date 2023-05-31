import { Module,DynamicModule } from '@nestjs/common';
import { BookModule } from './book/Book.module';
import { DynamicModuleLoader } from './dynamic-module.loader.';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/Entities/user.entity';
import { userModule } from './users/user.module';





@Module({
  imports: [BookModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'import pandas',
    database: 'bookshop',
    entities: [User],
    synchronize: true,

    //everytimee modify our entries it will auto update thingsw
  }), userModule,],
  controllers: [],
  providers: []
  

})

//here we created a forRoot method which returns a promise of type Dynamic Module
// here we are calling our load method defined in dynamic module loader 
export class RootModule {
  static async forRoot(): Promise<DynamicModule> {
    const dynamicModule = await DynamicModuleLoader.load();
    return {
      module: RootModule,
      imports: [dynamicModule]
    }
  }
}
