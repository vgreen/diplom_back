import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("department_all_patients_list",{schema:"mgerm" } )
@Index("date",["date",])
@Index("hystoryNumber",["hystoryNumber",])
@Index("department",["department",])
export class department_all_patients_list {

    @Column("date",{ 
        nullable:true,
        name:"date"
        })
    date:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"hystoryNumber"
        })
    hystoryNumber:number | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"patientID"
        })
    patientID:string | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"department"
        })
    department:number | null;
        
}
