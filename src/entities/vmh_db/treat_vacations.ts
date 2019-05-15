import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("treat_vacations",{schema:"vmh_db" } )
@Index("date1",["date1",])
@Index("date2",["date2",])
export class treat_vacations {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"rid"
        })
    rid:string;
        

    @Column("date",{ 
        nullable:true,
        name:"date1"
        })
    date1:string | null;
        

    @Column("date",{ 
        nullable:true,
        name:"date2"
        })
    date2:string | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'0'",
        name:"everyday"
        })
    everyday:number | null;
        

    @Column("time",{ 
        nullable:true,
        default: () => "'16:00:00'",
        name:"time1"
        })
    time1:string | null;
        

    @Column("time",{ 
        nullable:true,
        default: () => "'20:00:00'",
        name:"time2"
        })
    time2:string | null;
        
}
