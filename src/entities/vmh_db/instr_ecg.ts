import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("instr_ecg",{schema:"vmh_db" } )
export class instr_ecg {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"rid"
        })
    rid:number;
        

    @Column("varchar",{ 
        nullable:true,
        name:"ritm"
        })
    ritm:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"freq"
        })
    freq:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"ecg_result"
        })
    ecg_result:string | null;
        

    @Column("float",{ 
        nullable:true,
        name:"pq"
        })
    pq:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"qrs"
        })
    qrs:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"Interval_QT"
        })
    Interval_QT:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"doctor_instr"
        })
    doctor_instr:string | null;
        
}
