import {Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne} from "typeorm";
import {Income} from './Income'

@Entity()
export class Patient {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("mediumint",{
        nullable:true,
    })
    oldPatientID:number | null;

    @Column()
    firstName:string;

    @Column()
    secondName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column()
    birthday: string;

    @Column({
        nullable:true,
    })
    type: string;

    @OneToMany(type => Income, income => income.patient)
    incomes: Income[];

    @OneToOne( type => Income )
    currentIncome: Income;

    @Column({
        nullable:true,
    })
    region: string;

}
