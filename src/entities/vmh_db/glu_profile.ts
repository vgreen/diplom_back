import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("glu_profile",{schema:"vmh_db" } )
export class glu_profile {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"rid"
        })
    rid:string;
        

    @Column("float",{ 
        nullable:true,
        name:"m1"
        })
    m1:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"m2"
        })
    m2:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"m3"
        })
    m3:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        default: () => "'09:00'",
        name:"t1"
        })
    t1:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        default: () => "'11:00'",
        name:"t2"
        })
    t2:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        default: () => "'13:00'",
        name:"t3"
        })
    t3:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"Primechanie"
        })
    Primechanie:string | null;
        
}
