import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("schedule",{schema:"mgerm_users" } )
export class schedule {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"ind"
        })
    ind:number;
        

    @Column("tinyint",{ 
        nullable:false,
        default: () => "'0'",
        name:"flag"
        })
    flag:number;
        

    @Column("date",{ 
        nullable:true,
        name:"stamp"
        })
    stamp:string | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"day"
        })
    day:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"doctor"
        })
    doctor:number | null;
        

    @Column("time",{ 
        nullable:true,
        default: () => "'09:00:00'",
        name:"start"
        })
    start:string | null;
        

    @Column("time",{ 
        nullable:true,
        default: () => "'16:00:00'",
        name:"finish"
        })
    finish:string | null;
        

    @Column("time",{ 
        nullable:true,
        default: () => "'13:00:00'",
        name:"breake_start"
        })
    breake_start:string | null;
        

    @Column("time",{ 
        nullable:true,
        default: () => "'13:40:00'",
        name:"breake_finish"
        })
    breake_finish:string | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'20'",
        name:"tm"
        })
    tm:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"room"
        })
    room:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'0'",
        name:"holiday"
        })
    holiday:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"room_ind"
        })
    room_ind:number | null;
        
}
