import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("1_personal_info",{schema:"vmh_db" } )
@Index("department",["department",])
@Index("out_date",["out_date",])
export class 1_personal_info {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"rid"
        })
    rid:string;
        

    @Column("int",{ 
        nullable:true,
        name:"number"
        })
    number:number | null;
        

    @Column("timestamp",{ 
        nullable:true,
        default: () => "CURRENT_TIMESTAMP",
        name:"creation_date"
        })
    creation_date:Date | null;
        

    @Column("char",{ 
        nullable:true,
        length:50,
        name:"dsm_ticket"
        })
    dsm_ticket:string | null;
        

    @Column("char",{ 
        nullable:true,
        length:10,
        name:"department"
        })
    department:string | null;
        

    @Column("char",{ 
        nullable:true,
        name:"dift"
        })
    dift:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"cur_doctor"
        })
    cur_doctor:number | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"room"
        })
    room:string | null;
        

    @Column("char",{ 
        nullable:true,
        length:4,
        name:"temp"
        })
    temp:string | null;
        

    @Column("char",{ 
        nullable:true,
        name:"transp"
        })
    transp:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"adv_ef"
        })
    adv_ef:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:5,
        name:"sex"
        })
    sex:string | null;
        

    @Column("char",{ 
        nullable:true,
        length:10,
        name:"from_department"
        })
    from_department:string | null;
        

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
        width:1,
        default: () => "'0'",
        name:"out_flag"
        })
    out_flag:boolean | null;
        

    @Column("tinyint",{ 
        nullable:true,
        width:1,
        default: () => "'0'",
        name:"rep_in_flag"
        })
    rep_in_flag:boolean | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:200,
        name:"phone"
        })
    phone:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"adres"
        })
    adres:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:250,
        name:"education"
        })
    education:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:250,
        name:"soc_level"
        })
    soc_level:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"living"
        })
    living:string | null;
        

    @Column("tinyint",{ 
        nullable:true,
        width:1,
        default: () => "'1'",
        name:"first_visit_in_year"
        })
    first_visit_in_year:boolean | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"first_vist_in_life"
        })
    first_vist_in_life:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'0'",
        name:"dolech"
        })
    dolech:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"polis"
        })
    polis:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"admRegion"
        })
    admRegion:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"cityRegion"
        })
    cityRegion:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"region"
        })
    region:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"polisCompany"
        })
    polisCompany:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"source"
        })
    source:string | null;
        

    @Column("date",{ 
        nullable:true,
        name:"long_bl"
        })
    long_bl:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:25,
        name:"transport"
        })
    transport:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"arrives"
        })
    arrives:string | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'0'",
        name:"work_in_moscow"
        })
    work_in_moscow:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"region_code"
        })
    region_code:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'0'",
        name:"country_flag"
        })
    country_flag:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"Invalid_VOV"
        })
    Invalid_VOV:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"Voennoslugashchie"
        })
    Voennoslugashchie:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Sotsialnaya_gruppa"
        })
    Sotsialnaya_gruppa:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Semeynoe_pologenie"
        })
    Semeynoe_pologenie:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"Narushennaya_semeynaya_situatsiya"
        })
    Narushennaya_semeynaya_situatsiya:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"Invalid"
        })
    Invalid:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'1'",
        name:"Ekonomicheskiy_status"
        })
    Ekonomicheskiy_status:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'4'",
        name:"Obrazovanie_(dlitelnost)"
        })
    Obrazovanie_(dlitelnost):number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'1'",
        name:"Oplata"
        })
    Oplata:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Gruppa_invalidnosti"
        })
    Gruppa_invalidnosti:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"Suitsidalniy_patsient"
        })
    Suitsidalniy_patsient:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Gilishchnie_usloviya"
        })
    Gilishchnie_usloviya:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Okrug"
        })
    Okrug:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"Grant"
        })
    Grant:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Nomer_pregney_istorii_bolezni"
        })
    Nomer_pregney_istorii_bolezni:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"Vpervie_v_dannom_godu"
        })
    Vpervie_v_dannom_godu:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"zanyatost"
        })
    zanyatost:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"document"
        })
    document:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"SNILS"
        })
    SNILS:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"Code"
        })
    Code:string | null;
        
}
