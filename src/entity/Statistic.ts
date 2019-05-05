import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Statistic {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    shBekaPost: number;

    @Column()
    shBekaVip: number;

    @Column()
    shGamPost: number;

    @Column()
    shGamVip: number;

    @Column()
    situacTrevogPost: number;

    @Column()
    situacTrevogVip: number;

    @Column()
    lichTrevogPost: number;

    @Column()
    lichTrevogVip: number;

}