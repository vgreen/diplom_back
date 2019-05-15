import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("vich_gepatiti_i_sifilis",{schema:"vmh_db" } )
export class vich_gepatiti_i_sifilis {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"rid"
        })
    rid:string;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"anti-HIV2"
        })
    anti-HIV2:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"HBs_(antigen)2"
        })
    HBs_(antigen)2:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"Tr_pallidum2"
        })
    Tr_pallidum2:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"RMP_s_kardiolipinovim_Ar2"
        })
    RMP_s_kardiolipinovim_Ar2:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"Primechanie"
        })
    Primechanie:string | null;
        
}
