import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("records",{schema:"vmh_db" } )
export class records {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"rid"
        })
    rid:string;
        

    @Column("text",{ 
        nullable:true,
        name:"state_dynamic"
        })
    state_dynamic:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"dynamic_type"
        })
    dynamic_type:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"sleeping"
        })
    sleeping:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"zhaloby"
        })
    zhaloby:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"therapy"
        })
    therapy:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"AT"
        })
    AT:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"recomendations"
        })
    recomendations:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"info"
        })
    info:string | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'0'",
        name:"print_flag"
        })
    print_flag:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"phys_functions"
        })
    phys_functions:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"methodics"
        })
    methodics:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"PhysProc"
        })
    PhysProc:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"consultations"
        })
    consultations:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"analises"
        })
    analises:string | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'0'",
        name:"del"
        })
    del:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"Soputstvuyushchie_diagnozi"
        })
    Soputstvuyushchie_diagnozi:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"Lechashchiy_vrach"
        })
    Lechashchiy_vrach:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"Zaveduyushchiy_otdeleniem"
        })
    Zaveduyushchiy_otdeleniem:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"Metodkik_kliniki"
        })
    Metodkik_kliniki:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"FT_IRT_GBO"
        })
    FT_IRT_GBO:string | null;
        
}
