import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("elektromiografiya",{schema:"vmh_db" } )
export class elektromiografiya {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"rid"
        })
    rid:string;
        

    @Column("text",{ 
        nullable:true,
        name:"Zaklyuchenie"
        })
    Zaklyuchenie:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"Nerv"
        })
    Nerv:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:15,
        name:"Storona"
        })
    Storona:string | null;
        

    @Column("float",{ 
        nullable:true,
        name:"Amplituda_M-otveta"
        })
    Amplituda_M-otveta:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"Skorost_rasprostraneniya_vozbugdeniya_(SRV)"
        })
    Skorost_rasprostraneniya_vozbugdeniya_(SRV):number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"Terminalnaya_latentnost"
        })
    Terminalnaya_latentnost:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        default: () => "'норма'",
        name:"Porog_vizivaniya_M-otveta"
        })
    Porog_vizivaniya_M-otveta:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"Nerv_F-volni"
        })
    Nerv_F-volni:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"Storona_nerva_F-volni"
        })
    Storona_nerva_F-volni:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"%_visokoamplitudnih_voln_(VA)"
        })
    %_visokoamplitudnih_voln_(VA):number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"%_gigantskih_voln_(GV)"
        })
    %_gigantskih_voln_(GV):number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"%_blokov_provedeniya_vozbugdeniya"
        })
    %_blokov_provedeniya_vozbugdeniya:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"%_povtornih_voln"
        })
    %_povtornih_voln:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"Dopolnitelnie_parametri"
        })
    Dopolnitelnie_parametri:string | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"F_volna"
        })
    F_volna:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Srednyaya_amplituda"
        })
    Srednyaya_amplituda:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"SRV"
        })
    SRV:number | null;
        
}
