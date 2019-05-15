import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("directors",{schema:"mgerm_users" } )
export class directors {

    @Column("int",{ 
        nullable:false,
        default: () => "'0'",
        name:"ind"
        })
    ind:number;
        

    @Column("timestamp",{ 
        nullable:false,
        default: () => "'0000-00-00 00:00:00'",
        name:"created"
        })
    created:Date;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"login"
        })
    login:string | null;
        

    @Column("char",{ 
        nullable:true,
        length:48,
        name:"password"
        })
    password:string | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'0'",
        name:"GUID"
        })
    GUID:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'0'",
        name:"class"
        })
    class:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"department"
        })
    department:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"last_name"
        })
    last_name:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"first_name"
        })
    first_name:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"second_name"
        })
    second_name:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"spec"
        })
    spec:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"observe"
        })
    observe:string | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'1'",
        name:"works"
        })
    works:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'0'",
        name:"vacation"
        })
    vacation:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'0'",
        name:"director"
        })
    director:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'0'",
        name:"reception_doctor"
        })
    reception_doctor:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'0'",
        name:"allow_fio_change"
        })
    allow_fio_change:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'0'",
        name:"expert"
        })
    expert:number | null;
        
}
