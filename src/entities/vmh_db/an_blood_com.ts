import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("an_blood_com",{schema:"vmh_db" } )
export class an_blood_com {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"rid"
        })
    rid:string;
        

    @Column("float",{ 
        nullable:true,
        name:"RBC"
        })
    RBC:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"MCV"
        })
    MCV:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"RDW"
        })
    RDW:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"HCT"
        })
    HCT:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"PLT"
        })
    PLT:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"MPV"
        })
    MPV:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"PDW"
        })
    PDW:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"PCT"
        })
    PCT:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"WBC"
        })
    WBC:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"HBG"
        })
    HBG:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"MCH"
        })
    MCH:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"MCHC"
        })
    MCHC:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"LYM"
        })
    LYM:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"GRAN"
        })
    GRAN:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"MID"
        })
    MID:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"LYM-pr"
        })
    LYM-pr:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"GRA-pr"
        })
    GRA-pr:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"MID-pr"
        })
    MID-pr:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"miel"
        })
    miel:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"meta"
        })
    meta:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"palochk"
        })
    palochk:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"segm"
        })
    segm:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"eosin"
        })
    eosin:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"basofil"
        })
    basofil:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"lymph"
        })
    lymph:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"mono"
        })
    mono:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"plasm"
        })
    plasm:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"soe"
        })
    soe:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"morph_er"
        })
    morph_er:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"morph_leu"
        })
    morph_leu:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"Primechanie"
        })
    Primechanie:string | null;
        
}
