import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";

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
}