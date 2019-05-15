import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("department_income",{schema:"mgerm" } )
@Index("date",["date",])
@Index("patientID",["patientID",])
export class department_income {

    @Column("char",{ 
        nullable:true,
        length:50,
        name:"department"
        })
    department:string | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'0'",
        name:"rep_in_flag"
        })
    rep_in_flag:number | null;
        

    @Column("tinyint",{ 
        nullable:false,
        width:1,
        default: () => "'0'",
        name:"sx"
        })
    sx:boolean;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"age"
        })
    age:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'0'",
        name:"invalid"
        })
    invalid:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"region_code"
        })
    region_code:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'0'",
        name:"country"
        })
    country:number | null;
        

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"hystoryNumber"
        })
    hystoryNumber:number;
        

    @Column("mediumint",{ 
        nullable:true,
        name:"patientID"
        })
    patientID:number | null;
        

    @Column("bigint",{ 
        nullable:false,
        default: () => "'0'",
        name:"recordID"
        })
    recordID:string;
        

    @Column("date",{ 
        nullable:false,
        name:"date"
        })
    date:string;
        

    @Column("tinyint",{ 
        nullable:false,
        default: () => "'0'",
        name:"finance"
        })
    finance:number;
        
}
