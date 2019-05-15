import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import { User } from "./User";

@Entity()
export class MainDiagnose {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    value: string;

    @Column()
    code: string;

    @Column()
    date: number;

    @OneToOne( type => User )
    @JoinColumn()
    author: User;

}