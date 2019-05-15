import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("4_ana_morbi",{schema:"vmh_db" } )
export class 4_ana_morbi {

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
        name:"date"
        })
    date:Date | null;
        

    @Column("text",{ 
        nullable:true,
        name:"epid_anamnez"
        })
    epid_anamnez:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"преморбид"
        })
    преморбид:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"morbi_begin"
        })
    morbi_begin:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"morbi_reason"
        })
    morbi_reason:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"first_sympt"
        })
    first_sympt:string | null;
        

    @Column("date",{ 
        nullable:true,
        name:"fst_hspt"
        })
    fst_hspt:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"last_hspt"
        })
    last_hspt:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"hosp_num"
        })
    hosp_num:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"after_state"
        })
    after_state:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"after_therapy"
        })
    after_therapy:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"altering"
        })
    altering:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"morby_dynam"
        })
    morby_dynam:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"state_dynam"
        })
    state_dynam:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"amb_cons"
        })
    amb_cons:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"amb_treatment"
        })
    amb_treatment:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"amb_treat_result"
        })
    amb_treat_result:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hosp"
        })
    hosp:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"deseases"
        })
    deseases:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"allerg"
        })
    allerg:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"ginecol"
        })
    ginecol:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"head_injury"
        })
    head_injury:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"source"
        })
    source:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"Flurografia"
        })
    Flurografia:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Dlitelnost_zabolevaniya_(let)"
        })
    Dlitelnost_zabolevaniya_(let):number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"mes"
        })
    mes:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Stress"
        })
    Stress:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Esli_stress_ostriy,_to_on_svyazan_s"
        })
    Esli_stress_ostriy,_to_on_svyazan_s:number | null;
        

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
        name:"Nootropi,_vitamini,_sosudistie_preparati"
        })
    Nootropi,_vitamini,_sosudistie_preparati:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"Trankvilizatori,_anksiolitiki,_gipnotiki"
        })
    Trankvilizatori,_anksiolitiki,_gipnotiki:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"Antidepressanti"
        })
    Antidepressanti:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"Neyroleptiki"
        })
    Neyroleptiki:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"Onkologicheskie"
        })
    Onkologicheskie:number | null;
        
}
