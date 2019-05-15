import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("unlock_log",{schema:"mgerm" } )
export class unlock_log {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"ind"
        })
    ind:string;
        

    @Column("timestamp",{ 
        nullable:true,
        default: () => "CURRENT_TIMESTAMP",
        name:"date"
        })
    date:Date | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"recordID"
        })
    recordID:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"authorID"
        })
    authorID:string | null;
        
}
