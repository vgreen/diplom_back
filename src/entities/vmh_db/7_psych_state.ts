import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("7_psych_state",{schema:"vmh_db" } )
@Index("NewIndex",["number",])
export class s7_psych_state {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"rid"
        })
    rid:string;
        

    @Column("bigint",{ 
        nullable:true,
        default: () => "'0'",
        name:"number"
        })
    number:string | null;
        

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
        name:"orientation"
        })
    orientation:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"entering"
        })
    entering:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"clothes"
        })
    clothes:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"face"
        })
    face:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"contact"
        })
    contact:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"speach"
        })
    speach:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"mood"
        })
    mood:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"mood_in_proc"
        })
    mood_in_proc:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"emotional_dist"
        })
    emotional_dist:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"memory"
        })
    memory:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"cognition"
        })
    cognition:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"delusion"
        })
    delusion:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"intellect"
        })
    intellect:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"suicidal"
        })
    suicidal:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"morby_ref"
        })
    morby_ref:string | null;
        
}
