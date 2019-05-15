import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("scales",{schema:"mgerm" } )
export class scales {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"recordid"
        })
    recordid:number;
        

    @Column("date",{ 
        nullable:true,
        name:"date"
        })
    date:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"department"
        })
    department:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"SB1"
        })
    SB1:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"SB2"
        })
    SB2:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"ST1"
        })
    ST1:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"ST2"
        })
    ST2:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"LT1"
        })
    LT1:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"LT2"
        })
    LT2:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"SG1"
        })
    SG1:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"SG2"
        })
    SG2:number | null;
        
}
