import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("2_zhaloby",{schema:"vmh_db" } )
@Index("NewIndex",["number",])
export class 2_zhaloby {

    @Column("int",{ 
        nullable:true,
        name:"number"
        })
    number:number | null;
        

    @Column("timestamp",{ 
        nullable:true,
        default: () => "CURRENT_TIMESTAMP",
        name:"date"
        })
    date:Date | null;
        

    @Column("text",{ 
        nullable:true,
        name:"bl"
        })
    bl:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"main"
        })
    main:string | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"open_bl"
        })
    open_bl:number | null;
        

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"rid"
        })
    rid:string;
        
}
