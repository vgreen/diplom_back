import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("patients_list",{schema:"mgerm" } )
@Index("uniqInd",["first_name","last_name","second_name","birthday",],{unique:true})
@Index("patientID",["patientID",])
export class patients_list {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"patientID"
        })
    patientID:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"last_name"
        })
    last_name:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"first_name"
        })
    first_name:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"second_name"
        })
    second_name:string | null;
        

    @Column("date",{ 
        nullable:true,
        name:"birthday"
        })
    birthday:string | null;
        

    @Column("timestamp",{ 
        nullable:true,
        default: () => "CURRENT_TIMESTAMP",
        name:"registed"
        })
    registed:Date | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"incorrectID"
        })
    incorrectID:string | null;
        
}
