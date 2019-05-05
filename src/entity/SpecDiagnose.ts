import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import { User } from "./User";
import { Visit } from "./Visit";

@Entity()
export class MainDiagnose {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    value: string;

    @Column()
    code: string;
}