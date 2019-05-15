import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("rooms",{schema:"mgerm_users" } )
export class rooms {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"ind"
        })
    ind:number;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'1'",
        name:"flag"
        })
    flag:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"department"
        })
    department:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"number"
        })
    number:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"name"
        })
    name:string | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'0'",
        name:"vacation"
        })
    vacation:number | null;
        
}
