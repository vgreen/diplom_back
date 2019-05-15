import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("osmotr_psihoterapevta",{schema:"vmh_db" } )
export class osmotr_psihoterapevta {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"rid"
        })
    rid:string;
        

    @Column("text",{ 
        nullable:true,
        name:"Zaklyuchenie"
        })
    Zaklyuchenie:string | null;
        

    @Column("float",{ 
        nullable:true,
        name:"UET"
        })
    UET:number | null;
        
}
