import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("patients_list_correction",{schema:"mgerm" } )
export class patients_list_correction {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"ind"
        })
    ind:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"old_patientID"
        })
    old_patientID:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"new_patientID"
        })
    new_patientID:string | null;
        

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
        

    @Column("bigint",{ 
        nullable:true,
        name:"corrector"
        })
    corrector:string | null;
        

    @Column("timestamp",{ 
        nullable:true,
        default: () => "CURRENT_TIMESTAMP",
        name:"date"
        })
    date:Date | null;
        
}
