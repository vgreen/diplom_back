import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("seccure_log",{schema:"mgerm_users" } )
export class seccure_log {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"ind"
        })
    ind:number;
        

    @Column("bigint",{ 
        nullable:true,
        name:"ip"
        })
    ip:string | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"pwd_flag"
        })
    pwd_flag:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"injection_flag"
        })
    injection_flag:number | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"date"
        })
    date:Date | null;
        
}
