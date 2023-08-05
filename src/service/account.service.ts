import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Account } from "src/entity/account";
import { Repository } from "typeorm";


@Injectable()
export class AccountService{
    constructor(
        @InjectRepository(Account)
        private accountRepository: Repository<Account>
    ){}

    createAccount(account: Account){
        return this.accountRepository.save(account);
    }

    findAll(){
        return this.accountRepository.find({
            relations:{
                user: true
            }
        })
    }

}