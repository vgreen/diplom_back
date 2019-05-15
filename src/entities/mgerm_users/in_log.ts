import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("in_log",{schema:"mgerm_users" } )
@Index("id",["id",])
export class in_log {

    @Column("int",{ 
        nullable:false,
        primary:true,
        default: () => "'0'",
        name:"id"
        })
    id:number;
        

    @Column("bigint",{ 
        nullable:true,
        name:"connection_ID"
        })
    connection_ID:string | null;
        

    @Column("char",{ 
        nullable:true,
        length:20,
        name:"adr"
        })
    adr:string | null;
        

    @Column("timestamp",{ 
        nullable:false,
        default: () => "CURRENT_TIMESTAMP",
        name:"tm"
        })
    tm:Date;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"loginCount"
        })
    loginCount:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'0'",
        name:"badFlag"
        })
    badFlag:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"message"
        })
    message:string | null;
        
}
