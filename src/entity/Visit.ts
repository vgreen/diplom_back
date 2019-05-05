import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne} from "typeorm";
import { Income } from "./Income";
import { User } from "./User";

@Entity()
export class Visit {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne( type => Income , income => income.visits)
    income: Income;

    @Column()
    date: number;

    @OneToOne( type => Visit )
    @JoinColumn()
    visit: Visit;

    @Column()
    type: number;

    @OneToOne( type => User )
    @JoinColumn()
    author: User;

    @Column()
    incorrect: boolean;
    

}