import { Module } from "@nestjs/common/decorators/modules/module.decorator";
import { UserServices } from "./user.services";
import { userController } from "./user.controller";

@Module({
    imports: [],
    controllers: [userController],
    providers: [UserServices],
  })
export class userModule {}