import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";
import { Store } from "./store";

@Entity()
export class Account {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    numb: number

    @Column()
    type: string

    @OneToOne(() => User, (user) => user.account)
    @JoinColumn()
    user:User

    @ManyToOne(() => Store, (store) => store.account)
    store: Store
}