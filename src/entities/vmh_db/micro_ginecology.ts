import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("micro_ginecology",{schema:"vmh_db" } )
export class micro_ginecology {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"rid"
        })
    rid:string;
        

    @Column("varchar",{ 
        nullable:true,
        name:"epitel"
        })
    epitel:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"leu"
        })
    leu:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"flora"
        })
    flora:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        default: () => "'не обн.'",
        name:"gonococ"
        })
    gonococ:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        default: () => "'не обн.'",
        name:"trihomonades"
        })
    trihomonades:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        default: () => "'не обн.'",
        name:"candida"
        })
    candida:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        default: () => "'не обн.'",
        name:"mucosa"
        })
    mucosa:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"purity"
        })
    purity:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"epitel2"
        })
    epitel2:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"leu2"
        })
    leu2:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"flora2"
        })
    flora2:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"gonococ2"
        })
    gonococ2:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"trihomonades2"
        })
    trihomonades2:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"candida2"
        })
    candida2:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"mucosa2"
        })
    mucosa2:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"purity2"
        })
    purity2:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"epitel3"
        })
    epitel3:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"leu3"
        })
    leu3:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"flora3"
        })
    flora3:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"gonococ3"
        })
    gonococ3:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"trihomonades3"
        })
    trihomonades3:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"candida3"
        })
    candida3:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"mucosa3"
        })
    mucosa3:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"purity3"
        })
    purity3:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"Primechanie"
        })
    Primechanie:string | null;
        
}
