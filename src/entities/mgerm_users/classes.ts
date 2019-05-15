import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("classes",{schema:"mgerm_users" } )
export class classes {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"class"
        })
    class:number;
        

    @Column("varchar",{ 
        nullable:true,
        name:"name"
        })
    name:string | null;
        
}
