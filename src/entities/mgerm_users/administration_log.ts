import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("administration_log",{schema:"mgerm_users" } )
export class administration_log {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"ind"
        })
    ind:number;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"doctor"
        })
    doctor:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"administrator"
        })
    administrator:number | null;
        

    @Column("timestamp",{ 
        nullable:true,
        default: () => "CURRENT_TIMESTAMP",
        name:"date"
        })
    date:Date | null;
        
}
