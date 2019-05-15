import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("users_change_log_actions",{schema:"mgerm_users" } )
export class users_change_log_actions {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"action"
        })
    action:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
        default: () => "'0'",
        name:"comment"
        })
    comment:string | null;
        
}
