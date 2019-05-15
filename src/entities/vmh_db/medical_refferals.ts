import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("medical_refferals",{schema:"vmh_db" } )
@Index("to",["to",])
@Index("doctor",["doctor",])
export class medical_refferals {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"rid"
        })
    rid:string;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"to"
        })
    to:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'0'",
        name:"cito"
        })
    cito:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"org_code"
        })
    org_code:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"building"
        })
    building:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"room"
        })
    room:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"doctor"
        })
    doctor:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"comments"
        })
    comments:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:20,
        name:"department"
        })
    department:string | null;
        

    @Column("date",{ 
        nullable:true,
        name:"date"
        })
    date:string | null;
        

    @Column("time",{ 
        nullable:true,
        name:"time"
        })
    time:string | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"Numero"
        })
    Numero:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"Onkologicheskie"
        })
    Onkologicheskie:number | null;
        
}
