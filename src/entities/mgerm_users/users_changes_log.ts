import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("users_changes_log",{schema:"mgerm_users" } )
export class users_changes_log {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"ind"
        })
    ind:number;
        

    @Column("timestamp",{ 
        nullable:true,
        default: () => "CURRENT_TIMESTAMP",
        name:"date_time"
        })
    date_time:Date | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"administrator"
        })
    administrator:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"user"
        })
    user:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"action"
        })
    action:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:20,
        default: () => "'0'",
        name:"login"
        })
    login:string | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"GUID"
        })
    GUID:number | null;
        

    @Column("char",{ 
        nullable:true,
        length:50,
        default: () => "'0'",
        name:"department"
        })
    department:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:30,
        name:"last_name"
        })
    last_name:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:30,
        name:"first_name"
        })
    first_name:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:30,
        name:"second_name"
        })
    second_name:string | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'0'",
        name:"director"
        })
    director:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'0'",
        name:"allow_fio_change"
        })
    allow_fio_change:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'0'",
        name:"reception_doctor"
        })
    reception_doctor:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'0'",
        name:"spec"
        })
    spec:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'0'",
        name:"class"
        })
    class:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        default: () => "'0'",
        name:"observe"
        })
    observe:string | null;
        
}
