import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("an_uro_com",{schema:"vmh_db" } )
export class an_uro_com {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"rid"
        })
    rid:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:30,
        default: () => "'NORMAL'",
        name:"glu"
        })
    glu:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:30,
        name:"pro"
        })
    pro:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:30,
        name:"bil"
        })
    bil:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:30,
        default: () => "'NORMAL'",
        name:"uro"
        })
    uro:string | null;
        

    @Column("float",{ 
        nullable:true,
        name:"ph"
        })
    ph:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:30,
        name:"bld"
        })
    bld:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:30,
        name:"ket"
        })
    ket:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:30,
        name:"nit"
        })
    nit:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:30,
        default: () => "'NEG'",
        name:"leu"
        })
    leu:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:30,
        name:"TURB"
        })
    TURB:string | null;
        

    @Column("float",{ 
        nullable:true,
        name:"SG"
        })
    SG:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        default: () => "'LIGHT YELLOW'",
        name:"COLOR"
        })
    COLOR:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"epitel"
        })
    epitel:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"leu_vis"
        })
    leu_vis:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"mucosa"
        })
    mucosa:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"salt"
        })
    salt:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"eritr_neism"
        })
    eritr_neism:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"eritr_ismen"
        })
    eritr_ismen:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"cyl_hyal"
        })
    cyl_hyal:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"cyl_gran"
        })
    cyl_gran:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"cyl_vax"
        })
    cyl_vax:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"cyl_epth"
        })
    cyl_epth:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"cyl_leu"
        })
    cyl_leu:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"cyl_pgm"
        })
    cyl_pgm:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"bact"
        })
    bact:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"comments"
        })
    comments:string | null;
        
}
