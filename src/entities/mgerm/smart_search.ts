import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("smart_search",{schema:"mgerm" } )
@Index("birthday",["birthday",])
@Index("age",["age",])
@Index("region_code",["region_code",])
@Index("cur_ds",["cur_ds",])
@Index("doc",["doc",])
export class smart_search {

    @Column("date",{ 
        nullable:true,
        name:"birthday"
        })
    birthday:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"cur_ds"
        })
    cur_ds:string | null;
        

    @Column("mediumint",{ 
        nullable:false,
        primary:true,
        default: () => "'0'",
        name:"hystorynumber"
        })
    hystorynumber:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:50,
        name:"last_name"
        })
    last_name:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:50,
        name:"first_name"
        })
    first_name:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:50,
        name:"second_name"
        })
    second_name:string;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"age"
        })
    age:number | null;
        

    @Column("tinyint",{ 
        nullable:false,
        width:1,
        default: () => "'0'",
        name:"sx"
        })
    sx:boolean;
        

    @Column("date",{ 
        nullable:false,
        name:"in_date"
        })
    in_date:string;
        

    @Column("date",{ 
        nullable:true,
        name:"out_date"
        })
    out_date:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"region_code"
        })
    region_code:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:152,
        name:"doc"
        })
    doc:string | null;
        

    @Column("mediumint",{ 
        nullable:true,
        name:"patientID"
        })
    patientID:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"Grant"
        })
    Grant:number | null;
        
}
