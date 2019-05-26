import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("10_spec",{schema:"vmh_db" } )
export class s10_spec {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"rid"
        })
    rid:string;
        

    @Column("text",{ 
        nullable:true,
        name:"result"
        })
    result:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"result2"
        })
    result2:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"complaints"
        })
    complaints:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"anamnes"
        })
    anamnes:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"deseases"
        })
    deseases:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"status"
        })
    status:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"result3"
        })
    result3:string | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'0'",
        name:"rep_vis"
        })
    rep_vis:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"investigations"
        })
    investigations:string | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'0'",
        name:"absent"
        })
    absent:number | null;
        
}
