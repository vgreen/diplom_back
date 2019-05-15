import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("holterovskoe_monitorirovanie",{schema:"vmh_db" } )
export class holterovskoe_monitorirovanie {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"rid"
        })
    rid:string;
        

    @Column("text",{ 
        nullable:true,
        name:"Rezultat"
        })
    Rezultat:string | null;
        
}
