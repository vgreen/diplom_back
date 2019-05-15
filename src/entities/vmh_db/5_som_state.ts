import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("5_som_state",{schema:"vmh_db" } )
export class 5_som_state {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"rid"
        })
    rid:string;
        

    @Column("tinyint",{ 
        nullable:true,
        width:1,
        default: () => "'0'",
        name:"rep_vis"
        })
    rep_vis:boolean | null;
        

    @Column("timestamp",{ 
        nullable:true,
        default: () => "CURRENT_TIMESTAMP",
        name:"date"
        })
    date:Date | null;
        

    @Column("text",{ 
        nullable:true,
        name:"an_morby"
        })
    an_morby:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"deseases"
        })
    deseases:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"allerg"
        })
    allerg:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"constitution"
        })
    constitution:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"eating"
        })
    eating:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"skin"
        })
    skin:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"сardiotones"
        })
    сardiotones:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"puls"
        })
    puls:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"stomach"
        })
    stomach:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"breathing"
        })
    breathing:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hepar"
        })
    hepar:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"rens"
        })
    rens:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"syst_pres"
        })
    syst_pres:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"diast_pres"
        })
    diast_pres:number | null;
        

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
        

    @Column("text",{ 
        nullable:true,
        name:"result2"
        })
    result2:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"result3"
        })
    result3:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"bones_muscules"
        })
    bones_muscules:string | null;
        

    @Column("float",{ 
        nullable:true,
        name:"temp"
        })
    temp:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'0'",
        name:"absent"
        })
    absent:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"investigations"
        })
    investigations:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Rost"
        })
    Rost:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Ves"
        })
    Ves:number | null;
        
}
