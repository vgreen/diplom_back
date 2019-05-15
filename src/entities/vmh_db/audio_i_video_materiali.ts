import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("audio_i_video_materiali",{schema:"vmh_db" } )
export class audio_i_video_materiali {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"rid"
        })
    rid:string;
        

    @Column("varchar",{ 
        nullable:true,
        name:"name"
        })
    name:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"type"
        })
    type:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"comments"
        })
    comments:string | null;
        
}
