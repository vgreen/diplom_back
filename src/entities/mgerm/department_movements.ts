import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("department_movements",{schema:"mgerm" } )
@Index("patientID",["patientID",])
export class department_movements {

    @Column("bigint",{ 
        nullable:true,
        name:"patientID"
        })
    patientID:string | null;
        

    @Column("mediumint",{ 
        nullable:false,
        primary:true,
        default: () => "'0'",
        name:"hystoryNumber"
        })
    hystoryNumber:number;
        

    @Column("char",{ 
        nullable:true,
        length:10,
        name:"department"
        })
    department:string | null;
        
}
