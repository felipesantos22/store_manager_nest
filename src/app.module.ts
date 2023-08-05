import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user';
import { UserModule } from './users.module';
import { Account } from './entity/account';
import { AccountModule } from './account.module';
import { StoreModele } from './store.module';
import { Store } from './entity/store';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'store_nest',
      entities: [User, Account, Store],
      synchronize: true,
    }),
    UserModule,
    AccountModule,
    StoreModele
  ],
})
export class AppModule { }
