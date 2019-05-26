import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("8_diagnoses",{schema:"vmh_db" } )
@Index("NewIndex",["number",])
export class s8_diagnoses {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"rid"
        })
    rid:string;
        

    @Column("bigint",{ 
        nullable:true,
        default: () => "'0'",
        name:"number"
        })
    number:string | null;
        

    @Column("timestamp",{ 
        nullable:true,
        default: () => "CURRENT_TIMESTAMP",
        name:"date"
        })
    date:Date | null;
        

    @Column("date",{ 
        nullable:true,
        name:"hosp_date"
        })
    hosp_date:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"in_ds"
        })
    in_ds:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"cur_ds"
        })
    cur_ds:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"out_ds"
        })
    out_ds:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"maintains"
        })
    maintains:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"departament"
        })
    departament:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"result"
        })
    result:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"vk"
        })
    vk:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"zav_otd"
        })
    zav_otd:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"doctor"
        })
    doctor:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"doctor2"
        })
    doctor2:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:200,
        name:"Napravlen_v_drugoe_ucheregdenie"
        })
    Napravlen_v_drugoe_ucheregdenie:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Napravlenie"
        })
    Napravlenie:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'1'",
        name:"Poseshchenie_po_povodu_zabolevaniya"
        })
    Poseshchenie_po_povodu_zabolevaniya:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"Povtorniy_vizit_v_techenie_dnya"
        })
    Povtorniy_vizit_v_techenie_dnya:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"Suitsidalnie_misli"
        })
    Suitsidalnie_misli:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Vedushchiy_sindrom"
        })
    Vedushchiy_sindrom:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Dopolnitelniy_sindrom"
        })
    Dopolnitelniy_sindrom:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'0'",
        name:"Bez_statisticheskogo_talona"
        })
    Bez_statisticheskogo_talona:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"Visit_result"
        })
    Visit_result:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"Flurografia"
        })
    Flurografia:string | null;
        

    @Column("tinyint",{ 
        nullable:true,
        width:1,
        name:"zanyatost"
        })
    zanyatost:boolean | null;
        

    @Column("tinyint",{ 
        nullable:true,
        width:1,
        name:"res_obrashenia"
        })
    res_obrashenia:boolean | null;
        

    @Column("tinyint",{ 
        nullable:true,
        width:1,
        name:"zabolevanie"
        })
    zabolevanie:boolean | null;
        

    @Column("text",{ 
        nullable:true,
        name:"recipe_1"
        })
    recipe_1:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"recipe_2"
        })
    recipe_2:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"recipe_3"
        })
    recipe_3:string | null;
        

    @Column("tinyint",{ 
        nullable:true,
        width:1,
        name:"finished_case"
        })
    finished_case:boolean | null;
        
}
