import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("9_treatment",{schema:"vmh_db" } )
@Index("NewIndex",["number",])
export class 9_treatment {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"rid"
        })
    rid:string;
        

    @Column("bigint",{ 
        nullable:true,
        default: () => "'0'",
        name:"number"
        })
    number:string | null;
        

    @Column("date",{ 
        nullable:true,
        name:"date"
        })
    date:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        default: () => "'Обследование и лечение'",
        name:"type"
        })
    type:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        default: () => "'15'",
        name:"Диета"
        })
    Диета:string | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"MЭХО"
        })
    MЭХО:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"РЭГ"
        })
    РЭГ:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"ЭЭГ"
        })
    ЭЭГ:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'1'",
        name:"АТ1"
        })
    АТ1:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'1'",
        name:"АТ2"
        })
    АТ2:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        default: () => "'ДЛГ'",
        name:"Гимнастика"
        })
    Гимнастика:string | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'0'",
        name:"ДЛГ"
        })
    ДЛГ:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'0'",
        name:"Массаж"
        })
    Массаж:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'1'",
        name:"Психолог"
        })
    Психолог:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        width:1,
        default: () => "'1'",
        name:"Трудотерап"
        })
    Трудотерап:boolean | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"Гинеколог"
        })
    Гинеколог:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"Окулист"
        })
    Окулист:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"Гастроэнтеролог"
        })
    Гастроэнтеролог:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"Кардиолог"
        })
    Кардиолог:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"Уролог"
        })
    Уролог:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"Эндокринолог"
        })
    Эндокринолог:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'1'",
        name:"ФТ"
        })
    ФТ:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'1'",
        name:"ЛФК"
        })
    ЛФК:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"ЛОР"
        })
    ЛОР:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"ИРТ"
        })
    ИРТ:number | null;
        

    @Column("bigint",{ 
        nullable:true,
        default: () => "'3'",
        name:"ad"
        })
    ad:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"СправкаЕРЦ"
        })
    СправкаЕРЦ:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"Рецепт"
        })
    Рецепт:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"ЛН"
        })
    ЛН:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"Рекомендации"
        })
    Рекомендации:string | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'1'",
        name:"анализ_крови"
        })
    анализ_крови:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'1'",
        name:"анализ_мочи"
        })
    анализ_мочи:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'1'",
        name:"ЭКГ"
        })
    ЭКГ:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'1'",
        name:"Конс_терапевта"
        })
    Конс_терапевта:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default: () => "'1'",
        name:"Конс_невролога"
        })
    Конс_невролога:number | null;
        
}
