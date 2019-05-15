import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("instr_uzi",{schema:"vmh_db" } )
export class instr_uzi {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"rid"
        })
    rid:string;
        

    @Column("text",{ 
        nullable:true,
        name:"uzi_result"
        })
    uzi_result:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"Organ"
        })
    Organ:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"Razmer"
        })
    Razmer:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"Konturi"
        })
    Konturi:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"Forma"
        })
    Forma:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"Kapsula"
        })
    Kapsula:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"Parenhima"
        })
    Parenhima:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"Ehogennost"
        })
    Ehogennost:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"Obrazovaniya"
        })
    Obrazovaniya:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"Konkrementi"
        })
    Konkrementi:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"Drugie_strukturi"
        })
    Drugie_strukturi:string | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'2'",
        name:"Naimenovanie_issledovaniya"
        })
    Naimenovanie_issledovaniya:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"Novorogdennie_i_deti_rannego_vozrasta_(do_2-h_let)"
        })
    Novorogdennie_i_deti_rannego_vozrasta_(do_2-h_let):number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"Intraoperatsionnoe_issledovanie"
        })
    Intraoperatsionnoe_issledovanie:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"UZI_s_vnutrivennim_kontrastirovaniem"
        })
    UZI_s_vnutrivennim_kontrastirovaniem:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"Interventsionnoe_vmeshatelstvo_pod_kontrolem_UZI"
        })
    Interventsionnoe_vmeshatelstvo_pod_kontrolem_UZI:number | null;
        
}
