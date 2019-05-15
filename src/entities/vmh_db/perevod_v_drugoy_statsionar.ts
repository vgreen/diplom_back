import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("perevod_v_drugoy_statsionar",{schema:"vmh_db" } )
export class perevod_v_drugoy_statsionar {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"rid"
        })
    rid:string;
        

    @Column("date",{ 
        nullable:true,
        name:"out_date"
        })
    out_date:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"to"
        })
    to:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:20,
        name:"num"
        })
    num:string | null;
        

    @Column("tinytext",{ 
        nullable:true,
        name:"tst"
        })
    tst:string | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"Perevod_v_psihiatricheskiy_statsionar"
        })
    Perevod_v_psihiatricheskiy_statsionar:number | null;
        
}
