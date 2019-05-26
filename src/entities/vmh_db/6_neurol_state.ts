import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("6_neurol_state",{schema:"vmh_db" } )
@Index("NewIndex",["number",])
export class s6_neurol_state {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"rid"
        })
    rid:string;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"number"
        })
    number:number | null;
        

    @Column("timestamp",{ 
        nullable:true,
        default: () => "CURRENT_TIMESTAMP",
        name:"date"
        })
    date:Date | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"type"
        })
    type:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"status"
        })
    status:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"zhaloby"
        })
    zhaloby:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"result"
        })
    result:string | null;
        
}
