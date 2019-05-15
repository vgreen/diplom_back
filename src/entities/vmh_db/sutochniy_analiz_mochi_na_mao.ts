import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("sutochniy_analiz_mochi_na_mao",{schema:"vmh_db" } )
export class sutochniy_analiz_mochi_na_mao {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"rid"
        })
    rid:string;
        

    @Column("float",{ 
        nullable:true,
        name:"MAO"
        })
    MAO:number | null;
        
}
