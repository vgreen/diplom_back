import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("department_statistics",{schema:"mgerm" } )
@Index("date_department_sx",["date","department","sx",],{unique:true})
export class department_statistics {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("date",{ 
        nullable:true,
        name:"date"
        })
    date:string | null;
        

    @Column("char",{ 
        nullable:true,
        length:50,
        name:"department"
        })
    department:string | null;
        

    @Column("char",{ 
        nullable:true,
        length:50,
        name:"sx"
        })
    sx:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"cnt"
        })
    cnt:number | null;
        
}
