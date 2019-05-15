import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("inv_immunolog",{schema:"vmh_db" } )
export class inv_immunolog {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"rid"
        })
    rid:string;
        

    @Column("float",{ 
        nullable:true,
        name:"IgG"
        })
    IgG:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"IgA"
        })
    IgA:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"IgM"
        })
    IgM:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"IgE"
        })
    IgE:string | null;
        
}
