import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("department_planes",{schema:"mgerm" } )
@Index("year_period_department",["year","period","department",],{unique:true})
export class department_planes {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"ind"
        })
    ind:number;
        

    @Column("year",{ 
        nullable:true,
        name:"year"
        })
    year:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"period"
        })
    period:number | null;
        

    @Column("char",{ 
        nullable:true,
        length:10,
        name:"department"
        })
    department:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"curated"
        })
    curated:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"pdays"
        })
    pdays:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"days"
        })
    days:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"dn_curated"
        })
    dn_curated:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"info"
        })
    info:string | null;
        
}
