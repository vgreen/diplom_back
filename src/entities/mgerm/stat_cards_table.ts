import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("stat_cards_table",{schema:"mgerm" } )
@Index("out_date",["out_date",])
export class stat_cards_table {

    @Column("mediumint",{ 
        nullable:false,
        primary:true,
        default: () => "'0'",
        name:"hystoryNumber"
        })
    hystoryNumber:number;
        

    @Column("bigint",{ 
        nullable:true,
        name:"patientID"
        })
    patientID:string | null;
        

    @Column("bigint",{ 
        nullable:false,
        default: () => "'0'",
        name:"recordID"
        })
    recordID:string;
        

    @Column("bigint",{ 
        nullable:false,
        default: () => "'0'",
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
        

    @Column("bigint",{ 
        nullable:true,
        name:"kdni"
        })
    kdni:string | null;
        

    @Column("bigint",{ 
        nullable:false,
        default: () => "'0'",
        name:"vibil"
        })
    vibil:string;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"ageIN"
        })
    ageIN:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:23,
        name:"kod2_1"
        })
    kod2_1:string | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"ageOUT"
        })
    ageOUT:number | null;
        
}
