import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("ad_mesure",{schema:"vmh_db" } )
export class ad_mesure {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"rid"
        })
    rid:string;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'120'",
        name:"syst"
        })
    syst:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'80'",
        name:"dyast"
        })
    dyast:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'76'",
        name:"ps"
        })
    ps:number | null;
        
}
