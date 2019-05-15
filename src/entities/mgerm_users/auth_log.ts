import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("auth_log",{schema:"mgerm_users" } )
export class auth_log {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"ind"
        })
    ind:number;
        

    @Column("timestamp",{ 
        nullable:true,
        name:"date"
        })
    date:Date | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"user"
        })
    user:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:20,
        name:"ip"
        })
    ip:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"action"
        })
    action:string | null;
        
}
