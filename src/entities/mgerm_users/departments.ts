import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("departments",{schema:"mgerm_users" } )
export class departments {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"ind"
        })
    ind:number;
        

    @Column("tinyint",{ 
        nullable:false,
        default: () => "'0'",
        name:"medis"
        })
    medis:number;
        

    @Column("tinyint",{ 
        nullable:false,
        default: () => "'1'",
        name:"active"
        })
    active:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:50,
        default: () => "'0'",
        name:"administration"
        })
    administration:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:50,
        default: () => "'0'",
        name:"investigation"
        })
    investigation:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:50,
        default: () => "'0'",
        name:"ambulatory"
        })
    ambulatory:string;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"sites"
        })
    sites:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"name"
        })
    name:string | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'0'",
        name:"clinic"
        })
    clinic:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"fot"
        })
    fot:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"department_chapters"
        })
    department_chapters:string | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'0'",
        name:"laboratory"
        })
    laboratory:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'0'",
        name:"oneday"
        })
    oneday:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        default: () => "'0'",
        name:"short_name"
        })
    short_name:string | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'0'",
        name:"profile"
        })
    profile:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'0'",
        name:"f16_order"
        })
    f16_order:number | null;
        

    @Column("char",{ 
        nullable:true,
        length:50,
        default: () => "'0'",
        name:"scb_name"
        })
    scb_name:string | null;
        
}
