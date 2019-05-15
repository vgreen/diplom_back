import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("an_biochem_blood",{schema:"vmh_db" } )
export class an_biochem_blood {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"rid"
        })
    rid:string;
        

    @Column("float",{ 
        nullable:true,
        name:"alt"
        })
    alt:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"BIL_TOT"
        })
    BIL_TOT:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"TGCA"
        })
    TGCA:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"ast"
        })
    ast:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"cholesterol"
        })
    cholesterol:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"glu"
        })
    glu:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"creatinine"
        })
    creatinine:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"urea_uv"
        })
    urea_uv:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"aso"
        })
    aso:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"crp"
        })
    crp:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"rf"
        })
    rf:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"IRON_FERROZINE"
        })
    IRON_FERROZINE:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"ALBUM"
        })
    ALBUM:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"alp_amp"
        })
    alp_amp:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"g-gt"
        })
    g-gt:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"BIL_dir"
        })
    BIL_dir:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"chol_hdl_direct"
        })
    chol_hdl_direct:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"chol_ldl_direct"
        })
    chol_ldl_direct:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"calcium_arsenazo"
        })
    calcium_arsenazo:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"LDH"
        })
    LDH:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"amylase_direct"
        })
    amylase_direct:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"phosphorus"
        })
    phosphorus:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"magnesium"
        })
    magnesium:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"protein_total"
        })
    protein_total:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"uric_acid"
        })
    uric_acid:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"ck"
        })
    ck:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"CK-MB"
        })
    CK-MB:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"MAY"
        })
    MAY:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"HbA1c"
        })
    HbA1c:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"Elektroliti_kaliy"
        })
    Elektroliti_kaliy:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"Elektroliti_natriy"
        })
    Elektroliti_natriy:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"Elektroliti_kaltsiy"
        })
    Elektroliti_kaltsiy:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"OGSS"
        })
    OGSS:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Protsent_nasishcheniya_gelezom_ferritina"
        })
    Protsent_nasishcheniya_gelezom_ferritina:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"Troponin"
        })
    Troponin:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"Primechanie"
        })
    Primechanie:string | null;
        
}
