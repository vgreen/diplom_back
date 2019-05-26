import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("dopolnitelnie_statisticheskie_dannie",{schema:"vmh_db" } )
export class dopolnitelnie_statisticheskie_dannie {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"rid"
        })
    rid:string;
        

    @Column("int",{ 
        nullable:true,
        name:"Rost"
        })
    Rost:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"Ves"
        })
    Ves:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"Dlitelnost_zabolevaniya_(let)"
        })
    Dlitelnost_zabolevaniya:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"Mesyatsev"
        })
    Mesyatsev:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Stress"
        })
    Stress:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Ostriy_stress_svyazan_s"
        })
    Ostriy_stress_svyazan_s:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Predshestvuyushchee_meditsinskoe_nablyudenie"
        })
    Predshestvuyushchee_meditsinskoe_nablyudenie:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"Sedativnie_preparati_na_rastitelnoy_osnove"
        })
    Sedativnie_preparati_na_rastitelnoy_osnove:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"Prinimal_nootropi,_vitamini,_sosudistie_preparati"
        })
    Prinimal_nootropi:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"Prinimal__trankvilizatori,_anksiolitiki,_gipnotiki"
        })
    Prinimal__trankvilizatori:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"Prinimal_antidepressanti"
        })
    Prinimal_antidepressanti:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"Prinimal_neyroleptiki"
        })
    Prinimal_neyroleptiki:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Obrazovanie_(dlitelnost)"
        })
    Obrazovanie:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Napravlenie"
        })
    Napravlenie:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Trudovaya_zanyatost"
        })
    Trudovaya_zanyatost:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Ekonomicheskiy_status"
        })
    Ekonomicheskiy_status:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Gilishchnie_usloviya"
        })
    Gilishchnie_usloviya:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Kolichestvo_brakov"
        })
    Kolichestvo_brakov:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Kolichestvo_detey"
        })
    Kolichestvo_detey:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Kurenie"
        })
    Kurenie:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Alkogol"
        })
    Alkogol:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"Invalidnost"
        })
    Invalidnost:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"Kolichestvo_predshestvuyushchih_gospitalizatsiy"
        })
    Kolichestvo_predshestvuyushchih_gospitalizatsiy:string | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"Priem_statinov_do_gospitalizatsii"
        })
    Priem_statinov_do_gospitalizatsii:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"Professiya"
        })
    Professiya:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"Pravorukost"
        })
    Pravorukost:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"Semeynoe_pologenie"
        })
    Semeynoe_pologenie:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"Nauchnaya_stepen"
        })
    Nauchnaya_stepen:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"Upotreblenie_narkotikov"
        })
    Upotreblenie_narkotikov:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"Vizovi_03"
        })
    Vizovi_03:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"Code"
        })
    Code:string | null;
        
}
