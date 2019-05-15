import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("medication",{schema:"vmh_db" } )
@Index("number",["number",])
@Index("on_date",["on_date",])
@Index("begin_change_date",["begin_change_date",])
@Index("linked_record",["linked_record",])
@Index("linked_off_record",["linked_off_record",])
export class medication {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"rid"
        })
    rid:string;
        

    @Column("mediumint",{ 
        nullable:true,
        name:"patientID"
        })
    patientID:number | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"number"
        })
    number:string | null;
        

    @Column("mediumint",{ 
        nullable:true,
        name:"linked_record"
        })
    linked_record:number | null;
        

    @Column("mediumint",{ 
        nullable:true,
        name:"linked_off_record"
        })
    linked_off_record:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"author_off"
        })
    author_off:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"author"
        })
    author:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"drug"
        })
    drug:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"numero"
        })
    numero:number | null;
        

    @Column("float",{ 
        nullable:true,
        default: () => "'0'",
        name:"morning"
        })
    morning:number | null;
        

    @Column("float",{ 
        nullable:true,
        default: () => "'0'",
        name:"day"
        })
    day:number | null;
        

    @Column("float",{ 
        nullable:true,
        default: () => "'0'",
        name:"evening"
        })
    evening:number | null;
        

    @Column("float",{ 
        nullable:true,
        default: () => "'0'",
        name:"night"
        })
    night:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"dosage"
        })
    dosage:number | null;
        

    @Column("timestamp",{ 
        nullable:true,
        name:"start_date"
        })
    start_date:Date | null;
        

    @Column("date",{ 
        nullable:true,
        name:"on_date"
        })
    on_date:string | null;
        

    @Column("date",{ 
        nullable:true,
        name:"begin_date"
        })
    begin_date:string | null;
        

    @Column("date",{ 
        nullable:true,
        name:"change_date"
        })
    change_date:string | null;
        

    @Column("date",{ 
        nullable:true,
        name:"begin_change_date"
        })
    begin_change_date:string | null;
        

    @Column("tinyint",{ 
        nullable:true,
        width:1,
        name:"off_fl"
        })
    off_fl:boolean | null;
        

    @Column("tinyint",{ 
        nullable:true,
        width:1,
        name:"finish_fl"
        })
    finish_fl:boolean | null;
        

    @Column("tinyint",{ 
        nullable:true,
        width:1,
        name:"dose_alt_fl"
        })
    dose_alt_fl:boolean | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'0'",
        name:"dose_new"
        })
    dose_new:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"complex"
        })
    complex:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"recomendation"
        })
    recomendation:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'0'",
        name:"regularity"
        })
    regularity:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"info"
        })
    info:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"path"
        })
    path:string | null;
        
}
