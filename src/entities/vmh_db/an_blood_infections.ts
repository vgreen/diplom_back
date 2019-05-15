import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("an_blood_infections",{schema:"vmh_db" } )
export class an_blood_infections {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"rid"
        })
    rid:string;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"anti-hiv"
        })
    anti-hiv:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"hbs-ag"
        })
    hbs-ag:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"anti-hcv"
        })
    anti-hcv:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"ig-treponema"
        })
    ig-treponema:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"rmp_cardiolypin"
        })
    rmp_cardiolypin:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"Primechanie"
        })
    Primechanie:string | null;
        
}
