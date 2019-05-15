import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    secondName: string;

    @Column()
    lastName: string;

    @Column({nullable:true})
    age: number;

    @Column()
    department: string;

    @Column()
    type: string;

}
