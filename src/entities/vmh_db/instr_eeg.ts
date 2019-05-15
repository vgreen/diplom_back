import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("instr_eeg",{schema:"vmh_db" } )
export class instr_eeg {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"rid"
        })
    rid:string;
        

    @Column("text",{ 
        nullable:true,
        name:"result1"
        })
    result1:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"result2"
        })
    result2:string | null;
        
}
