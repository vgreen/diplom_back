import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("department_outcome",{schema:"mgerm" } )
@Index("out_date",["out_date",])
@Index("patientID",["patientID",])
export class department_outcome {

    @Column("date",{ 
        nullable:true,
        name:"out_date"
        })
    out_date:string | null;
        

    @Column("char",{ 
        nullable:true,
        length:50,
        name:"department"
        })
    department:string | null;
        

    @Column("int",{ 
        nullable:false,
        primary:true,
        default: () => "'0'",
        name:"hystoryNumber"
        })
    hystoryNumber:number;
        

    @Column("mediumint",{ 
        nullable:true,
        name:"patientID"
        })
    patientID:number | null;
        

    @Column("int",{ 
        nullable:false,
        default: () => "'0'",
        name:"dead"
        })
    dead:number;
        

    @Column("bigint",{ 
        nullable:false,
        default: () => "'0'",
        name:"recordID"
        })
    recordID:string;
        

    @Column("tinyint",{ 
        nullable:true,
        width:1,
        name:"sx"
        })
    sx:boolean | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"age"
        })
    age:number | null;
        
}
