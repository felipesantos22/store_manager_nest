import { Body, Controller, Get, Post } from "@nestjs/common";
import { Account } from "src/entity/account";
import { AccountService } from "src/service/account.service";

@Controller('account')
export class AccountController {
    constructor(private readonly accountService: AccountService) { }

    @Post()
    createController(@Body() account: Account) {
        return this.accountService.createAccount(account);
    }

    @Get()
    findAllController(): Promise<Account[]> {
        return this.accountService.findAll();
    }

}