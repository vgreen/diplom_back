import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("emg_dvigatelnih_nervov_verhnih_konechnostey",{schema:"vmh_db" } )
export class emg_dvigatelnih_nervov_verhnih_konechnostey {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"rid"
        })
    rid:string;
        
}
