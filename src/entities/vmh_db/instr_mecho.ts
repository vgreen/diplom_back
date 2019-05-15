import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("instr_mecho",{schema:"vmh_db" } )
export class instr_mecho {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"rid"
        })
    rid:string;
        

    @Column("int",{ 
        nullable:true,
        name:"transmission"
        })
    transmission:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        default: () => "'Смещения срединных структур не вявлено.'",
        name:"med_structures"
        })
    med_structures:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        default: () => "'Желудочковая система не расширена.'",
        name:"venticules"
        })
    venticules:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        default: () => "'Дополнительных сигналов незначительное количество.'",
        name:"add_signals"
        })
    add_signals:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        default: () => "'Признаки повышения внутричерепного давления не выявлено.'",
        name:"cranial_pressure"
        })
    cranial_pressure:string | null;
        
}
