import {Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne} from "typeorm";
import {Income} from './Income'

@Entity()
export class Patient {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    secondName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column()
    birthday: number;

    @Column()
    type: string;

    @OneToMany(type => Income, income => income.patient)
    incomes: Income[];

    @OneToOne( type => Income )
    currentIncome: Income;

    @Column()
    region: string;

    @Column()
    education: string;

    @Column()
    socStatus: string;

    @Column()
    work: string;

    @Column()
    incorrect: boolean;

}
