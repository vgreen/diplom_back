import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("3_ana_vitae",{schema:"vmh_db" } )
@Index("NewIndex",["number",])
export class 3_ana_vitae {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"rid"
        })
    rid:string;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"number"
        })
    number:number | null;
        

    @Column("timestamp",{ 
        nullable:true,
        default: () => "CURRENT_TIMESTAMP",
        name:"date"
        })
    date:Date | null;
        

    @Column("char",{ 
        nullable:true,
        length:50,
        name:"type"
        })
    type:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"mother"
        })
    mother:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"father"
        })
    father:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"genetic_deseases"
        })
    genetic_deseases:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"first_develope"
        })
    first_develope:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"family_relations"
        })
    family_relations:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"kindergarten"
        })
    kindergarten:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"child_character"
        })
    child_character:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"school_age"
        })
    school_age:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"school_ref"
        })
    school_ref:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"qual"
        })
    qual:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"preferenses"
        })
    preferenses:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"school_interests"
        })
    school_interests:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"teenage"
        })
    teenage:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"scholl_finish"
        })
    scholl_finish:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"after_education"
        })
    after_education:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"result"
        })
    result:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"working"
        })
    working:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"last_work"
        })
    last_work:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"colleg_ralations"
        })
    colleg_ralations:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"family_hyst"
        })
    family_hyst:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"family"
        })
    family:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"family_rel"
        })
    family_rel:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"childrens"
        })
    childrens:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"last_interests"
        })
    last_interests:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"character"
        })
    character:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"addictions"
        })
    addictions:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"source"
        })
    source:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"Proishogdenie"
        })
    Proishogdenie:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"Flurografia"
        })
    Flurografia:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Kurenie"
        })
    Kurenie:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Alkogol"
        })
    Alkogol:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Kolichestvo_brakov"
        })
    Kolichestvo_brakov:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Obrazovanie_(napravlenie)"
        })
    Obrazovanie_(napravlenie):number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Obrazovanie_(dlitelnost)"
        })
    Obrazovanie_(dlitelnost):number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Trudovaya_zanyatost"
        })
    Trudovaya_zanyatost:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Ekonomicheskiy_status"
        })
    Ekonomicheskiy_status:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Kolichestvo_detey"
        })
    Kolichestvo_detey:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"Slugba_v_armii"
        })
    Slugba_v_armii:number | null;
        
}
