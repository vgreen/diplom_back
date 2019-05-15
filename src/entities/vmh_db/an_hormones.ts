import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("an_hormones",{schema:"vmh_db" } )
export class an_hormones {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"rid"
        })
    rid:string;
        

    @Column("float",{ 
        nullable:true,
        name:"cortisol"
        })
    cortisol:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"frt4"
        })
    frt4:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"thgab"
        })
    thgab:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"ftsh2"
        })
    ftsh2:number | null;
        
}
