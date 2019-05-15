import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("sisters_diary",{schema:"vmh_db" } )
export class sisters_diary {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"rid"
        })
    rid:string;
        

    @Column("text",{ 
        nullable:true,
        name:"complaints"
        })
    complaints:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"orientation"
        })
    orientation:string | null;
        

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
        name:"emotional_dist"
        })
    emotional_dist:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"delusion"
        })
    delusion:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"suicidal"
        })
    suicidal:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"psychotherapy"
        })
    psychotherapy:string | null;
        
}
