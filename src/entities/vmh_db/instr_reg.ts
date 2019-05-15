import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("instr_reg",{schema:"vmh_db" } )
export class instr_reg {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"rid"
        })
    rid:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"ps_carotis_r"
        })
    ps_carotis_r:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"ps_carotis_l"
        })
    ps_carotis_l:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"ps_vert_r"
        })
    ps_vert_r:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"ps_vert_l"
        })
    ps_vert_l:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"tonus_raspred_carot_r"
        })
    tonus_raspred_carot_r:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"tonus_raspred_carot_l"
        })
    tonus_raspred_carot_l:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"tonus_raspred_vert_r"
        })
    tonus_raspred_vert_r:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"tonus_raspred_vert_l"
        })
    tonus_raspred_vert_l:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"tonus_sopr_carot_r"
        })
    tonus_sopr_carot_r:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"tonus_sopr_carot_l"
        })
    tonus_sopr_carot_l:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"tonus_sopr_vert_r"
        })
    tonus_sopr_vert_r:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"tonus_sopr_vert_l"
        })
    tonus_sopr_vert_l:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"assim_carot"
        })
    assim_carot:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"assim_vert"
        })
    assim_vert:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        default: () => "'не затруднен'",
        name:"venos"
        })
    venos:string | null;
        
}
