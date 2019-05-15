import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("immunofermentniy_analiz_(at_k_gonadoliberinu)",{schema:"vmh_db" } )
export class immunofermentniy_analiz_(at_k_gonadoliberinu) {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"rid"
        })
    rid:string;
        
}
