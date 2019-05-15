import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("echo_cardio_graphia",{schema:"vmh_db" } )
export class echo_cardio_graphia {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"rid"
        })
    rid:string;
        

    @Column("text",{ 
        nullable:true,
        name:"echo_cardio_graphia_result"
        })
    echo_cardio_graphia_result:string | null;
        
}
