import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("statisticheskaya_karta",{schema:"vmh_db" } )
@Index("in_date",["in_date",])
@Index("out_date",["out_date",])
export class statisticheskaya_karta {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"rid"
        })
    rid:string;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"Sostoit_na_konets_goda"
        })
    Sostoit_na_konets_goda:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"Postupaet_vpervie_v_dannom_godu"
        })
    Postupaet_vpervie_v_dannom_godu:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"Postupaet_v_pervie_v_gizni"
        })
    Postupaet_v_pervie_v_gizni:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:1,
        default: () => "'F'",
        name:"Diagnoz"
        })
    Diagnoz:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:2,
        name:"Kod"
        })
    Kod:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:3,
        name:"Kod2"
        })
    Kod2:string | null;
        

    @Column("date",{ 
        nullable:true,
        name:"in_date"
        })
    in_date:string | null;
        

    @Column("date",{ 
        nullable:true,
        name:"out_date"
        })
    out_date:string | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"Rashogdenie_diagnozov"
        })
    Rashogdenie_diagnozov:number | null;
        
}
