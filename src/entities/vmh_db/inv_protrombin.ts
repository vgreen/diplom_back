import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("inv_protrombin",{schema:"vmh_db" } )
export class inv_protrombin {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"rid"
        })
    rid:string;
        

    @Column("float",{ 
        nullable:true,
        name:"relation"
        })
    relation:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"MNO"
        })
    MNO:number | null;
        
}
