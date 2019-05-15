import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("files",{schema:"mgerm" } )
@Index("recordID",["recordID",])
export class files {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"rid"
        })
    rid:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"recordID"
        })
    recordID:string | null;
        

    @Column("char",{ 
        nullable:true,
        length:255,
        name:"name"
        })
    name:string | null;
        

    @Column("char",{ 
        nullable:true,
        length:255,
        name:"file"
        })
    file:string | null;
        

    @Column("char",{ 
        nullable:true,
        length:16,
        default: () => "'192.168.0.3'",
        name:"server"
        })
    server:string | null;
        

    @Column("char",{ 
        nullable:true,
        length:255,
        name:"type"
        })
    type:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"size"
        })
    size:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'0'",
        name:"del"
        })
    del:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"author"
        })
    author:number | null;
        

    @Column("timestamp",{ 
        nullable:true,
        default: () => "CURRENT_TIMESTAMP",
        name:"tm_stamp"
        })
    tm_stamp:Date | null;
        
}
