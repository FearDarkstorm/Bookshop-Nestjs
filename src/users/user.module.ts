import { Module } from "@nestjs/common/decorators/modules/module.decorator";
import { UserServices } from "./user.services";
import { userController } from "./user.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/typeorm/Entities/user.entity";
@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [userController],
    providers: [UserServices],
  })
export class userModule {}