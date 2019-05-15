import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("neurophys_research",{schema:"vmh_db" } )
export class neurophys_research {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"rid"
        })
    rid:number;
        
}
