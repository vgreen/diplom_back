import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("system_globals",{schema:"mgerm_users" } )
export class system_globals {

    @Column("int",{ 
        nullable:true,
        name:"amb_card_number"
        })
    amb_card_number:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"case_number"
        })
    case_number:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"vacation_length"
        })
    vacation_length:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'0'",
        name:"preholiday_day"
        })
    preholiday_day:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"hospital"
        })
    hospital:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"hospital_code"
        })
    hospital_code:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"profile"
        })
    profile:number | null;
        
}
