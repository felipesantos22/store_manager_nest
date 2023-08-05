import { Module } from "@nestjs/common";
import { AccountService } from "./service/account.service";
import { AccountController } from "./controller/account.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Account } from "./entity/account";


@Module({
    imports: [TypeOrmModule.forFeature([Account])],
    providers: [AccountService],
    controllers: [AccountController]
})

export class AccountModule { }