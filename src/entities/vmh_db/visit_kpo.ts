import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("visit_kpo",{schema:"vmh_db" } )
@Index("NewIndex",["patientID",])
export class visit_kpo {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"rid"
        })
    rid:string;
        

    @Column("date",{ 
        nullable:true,
        name:"date"
        })
    date:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"patientID"
        })
    patientID:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"source"
        })
    source:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"zhaloby"
        })
    zhaloby:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"anamnez"
        })
    anamnez:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"status"
        })
    status:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"diagnos"
        })
    diagnos:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"therap"
        })
    therap:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"neurolog"
        })
    neurolog:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"result"
        })
    result:string | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"to_therap"
        })
    to_therap:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"to_neurolog"
        })
    to_neurolog:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"pz"
        })
    pz:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"tz"
        })
    tz:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"pz2"
        })
    pz2:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"doctorID"
        })
    doctorID:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"recStatus"
        })
    recStatus:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"zz"
        })
    zz:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"doctorName"
        })
    doctorName:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"zamGLVracha"
        })
    zamGLVracha:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"doctor2"
        })
    doctor2:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"comission"
        })
    comission:string | null;
        
}
