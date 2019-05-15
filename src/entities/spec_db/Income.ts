import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinColumn, ManyToOne, OneToOne, OneToMany} from "typeorm";
import { Patient } from './Patient'
import { MainDiagnose } from './MainDiagnose'
import { Visit } from "./Visit";
import { User } from "./User";
import { Statistic } from "./Statistic";

@Entity()
export class Income {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne( type => Patient , patient => patient.incomes)
    patient: Patient;

    @Column()
    inDate: number;

    @Column()
    outDate: number;

    @OneToOne( type => MainDiagnose )
    @JoinColumn()
    mainDiag: MainDiagnose;

    @Column()
    department: string;

    @OneToOne( type => User )
    @JoinColumn()
    author: User;

    @OneToOne( type => Statistic )
    @JoinColumn()
    statistic: Statistic;
    
    @OneToMany( type => Visit , visit => visit.income)
    visits: Visit[]
}