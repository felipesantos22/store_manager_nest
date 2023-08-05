import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Account } from "./account";


@Entity()
export class Store{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name:string

    @OneToMany(() => Account, (account) => account.store)
    account: Account[]
}