import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("epm_records",{schema:"mgerm_archive" } )
@Index("patientID",["patientID",])
@Index("date",["date",])
@Index("hystoryNumber",["hystoryNumber",])
@Index("recordTypeID",["recordTypeID",])
@Index("linked_record",["linked_record",])
export class arc_epm_records {

    @Column("bigint",{ 
        nullable:true,
        name:"patientID"
        })
    patientID:string | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'1'",
        name:"archiveID"
        })
    archiveID:number | null;
        

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        default: () => "'0'",
        name:"recordID"
        })
    recordID:string;
        

    @Column("tinyint",{ 
        nullable:false,
        default: () => "'0'",
        name:"docID"
        })
    docID:number;
        

    @Column("int",{ 
        nullable:true,
        name:"recordTypeID"
        })
    recordTypeID:number | null;
        

    @Column("date",{ 
        nullable:true,
        name:"date"
        })
    date:string | null;
        

    @Column("time",{ 
        nullable:true,
        name:"time"
        })
    time:string | null;
        

    @Column("mediumint",{ 
        nullable:true,
        name:"hystoryNumber"
        })
    hystoryNumber:number | null;
        

    @Column("mediumint",{ 
        nullable:true,
        name:"creatorID"
        })
    creatorID:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"text"
        })
    text:string | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"files_flag"
        })
    files_flag:number | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"formalisedDataID"
        })
    formalisedDataID:string | null;
        

    @Column("mediumint",{ 
        nullable:true,
        name:"authorID"
        })
    authorID:number | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"signaturDateTime"
        })
    signaturDateTime:Date | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"digest"
        })
    digest:string | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'0'",
        name:"deleted"
        })
    deleted:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'0'",
        name:"incorrect"
        })
    incorrect:number | null;
        

    @Column("mediumint",{ 
        nullable:true,
        name:"linked_record"
        })
    linked_record:number | null;
        
}
