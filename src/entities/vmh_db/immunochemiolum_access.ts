import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("immunochemiolum_access",{schema:"vmh_db" } )
export class immunochemiolum_access {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"rid"
        })
    rid:string;
        

    @Column("float",{ 
        nullable:true,
        name:"ttg"
        })
    ttg:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"t4-free"
        })
    t4-free:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"at-tpo"
        })
    at-tpo:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"at-tg"
        })
    at-tg:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"psa"
        })
    psa:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"free-psa"
        })
    free-psa:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"ca199"
        })
    ca199:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"ca125"
        })
    ca125:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"ca153"
        })
    ca153:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"cortisol"
        })
    cortisol:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"testosteron"
        })
    testosteron:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"anelin"
        })
    anelin:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"ferritin"
        })
    ferritin:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"free_t3"
        })
    free_t3:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"rea"
        })
    rea:number | null;
        
}
