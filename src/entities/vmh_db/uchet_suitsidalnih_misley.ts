import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("uchet_suitsidalnih_misley",{schema:"vmh_db" } )
export class uchet_suitsidalnih_misley {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"rid"
        })
    rid:string;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"Suitsidalnie_misli_v_anamneze"
        })
    Suitsidalnie_misli_v_anamneze:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"Suitsidalnie_misli_v_period_lecheniya"
        })
    Suitsidalnie_misli_v_period_lecheniya:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"Suitsidalnie_misli_-_nasledstvennost"
        })
    Suitsidalnie_misli_-_nasledstvennost:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"Suitsidalnie_postupki_v_anamneze"
        })
    Suitsidalnie_postupki_v_anamneze:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"Suitsidalnie_postupki_v_period_lecheniya"
        })
    Suitsidalnie_postupki_v_period_lecheniya:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"Suitsidalnie_postupki_-_nasledstvennost"
        })
    Suitsidalnie_postupki_-_nasledstvennost:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"Suitsidalnie_postupki"
        })
    Suitsidalnie_postupki:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"Suitsidalnie_misli"
        })
    Suitsidalnie_misli:string | null;
        
}
