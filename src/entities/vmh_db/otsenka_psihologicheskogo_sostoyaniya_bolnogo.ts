import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("otsenka_psihologicheskogo_sostoyaniya_bolnogo",{schema:"vmh_db" } )
export class otsenka_psihologicheskogo_sostoyaniya_bolnogo {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"rid"
        })
    rid:string;
        

    @Column("int",{ 
        nullable:true,
        name:"SHkala_Beka_pri_postuplenii"
        })
    SHkala_Beka_pri_postuplenii:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"SB_na_moment_vipiski"
        })
    SB_na_moment_vipiski:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Situatsionnaya_trevoga_pri_postuplenii"
        })
    Situatsionnaya_trevoga_pri_postuplenii:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"ST_Na_moment_vipiski"
        })
    ST_Na_moment_vipiski:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Lichnostnaya_trevoga_pri_postuplenii"
        })
    Lichnostnaya_trevoga_pri_postuplenii:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"LT_na_moment_vipiski"
        })
    LT_na_moment_vipiski:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"SHkala_Gamiltona_pri_postuplenii"
        })
    SHkala_Gamiltona_pri_postuplenii:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"SHG_na_moment_vipiski"
        })
    SHG_na_moment_vipiski:number | null;
        
}
