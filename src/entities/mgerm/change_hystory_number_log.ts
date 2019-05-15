import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("change_hystory_number_log",{schema:"mgerm" } )
export class change_hystory_number_log {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"ind"
        })
    ind:number;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"old"
        })
    old:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"new"
        })
    new:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"user"
        })
    user:number | null;
        

    @Column("timestamp",{ 
        nullable:true,
        default: () => "CURRENT_TIMESTAMP",
        name:"stamp"
        })
    stamp:Date | null;
        
}
