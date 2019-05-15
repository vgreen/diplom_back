import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("system_changes",{schema:"mgerm_users" } )
export class system_changes {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"ind"
        })
    ind:string;
        

    @Column("int",{ 
        nullable:false,
        default: () => "'0'",
        name:"user"
        })
    user:number;
        

    @Column("int",{ 
        nullable:false,
        default: () => "'0'",
        name:"table"
        })
    table:number;
        

    @Column("int",{ 
        nullable:false,
        default: () => "'0'",
        name:"line_id"
        })
    line_id:number;
        
}
