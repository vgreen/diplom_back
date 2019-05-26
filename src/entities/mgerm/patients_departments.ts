import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("patients_departments",{schema:"mgerm" } )
@Index("hystoryNumber",["hystoryNumber",])
@Index("department",["department",])
@Index("date",["date",])
export class patients_departments {

    @PrimaryGeneratedColumn()
    id: number;

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
        

    @Column("char",{ 
        nullable:true,
        length:10,
        name:"department"
        })
    department:string | null;
        
}
