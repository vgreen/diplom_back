import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("relaksatsionnaya_alfa_kapsula",{schema:"vmh_db" } )
export class relaksatsionnaya_alfa_kapsula {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"rid"
        })
    rid:string;
        

    @Column("text",{ 
        nullable:true,
        name:"Informatsiya"
        })
    Informatsiya:string | null;
        
}
