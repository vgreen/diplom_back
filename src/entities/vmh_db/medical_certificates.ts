import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("medical_certificates",{schema:"vmh_db" } )
export class medical_certificates {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"rid"
        })
    rid:string;
        

    @Column("char",{ 
        nullable:true,
        length:6,
        name:"serial"
        })
    serial:string | null;
        

    @Column("char",{ 
        nullable:true,
        length:50,
        name:"number"
        })
    number:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"Mesto_raboti"
        })
    Mesto_raboti:string | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'1'",
        name:"Pervichniy_LN"
        })
    Pervichniy_LN:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'1'",
        name:"LN_na_osnovnoe_mesto_raboti"
        })
    LN_na_osnovnoe_mesto_raboti:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:2,
        default: () => "'01'",
        name:"Prichina_netrudosposobnosti"
        })
    Prichina_netrudosposobnosti:string | null;
        

    @Column("date",{ 
        nullable:true,
        name:"c1"
        })
    c1:string | null;
        

    @Column("date",{ 
        nullable:true,
        name:"po1"
        })
    po1:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        default: () => "'ТЕРАПЕВТ'",
        name:"Dolgnost1"
        })
    Dolgnost1:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"Vrach1"
        })
    Vrach1:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"Dolgnost2"
        })
    Dolgnost2:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"Vrach2"
        })
    Vrach2:string | null;
        

    @Column("date",{ 
        nullable:true,
        name:"Pristupil_k_rabote_s"
        })
    Pristupil_k_rabote_s:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Inoe"
        })
    Inoe:number | null;
        
}
