import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("guides",{schema:"mgerm_users" } )
export class guides {

    @Column("tinyint",{ 
        nullable:false,
        primary:true,
        default: () => "'0'",
        name:"GUID"
        })
    GUID:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"type"
        })
    type:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:20,
        name:"sys_user"
        })
    sys_user:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:20,
        name:"sys_pwd"
        })
    sys_pwd:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"start_php"
        })
    start_php:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"directory"
        })
    directory:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"startup_info_script"
        })
    startup_info_script:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"list_script"
        })
    list_script:string | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"group_chapter"
        })
    group_chapter:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'1'",
        name:"unixes_default_values"
        })
    unixes_default_values:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'2'",
        name:"group_base_document"
        })
    group_base_document:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'1'",
        name:"active"
        })
    active:number | null;
        
}
