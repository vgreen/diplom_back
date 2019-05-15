import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("test",{schema:"vmh_db" } )
export class test {

    @Column("int",{ 
        nullable:true,
        name:"id"
        })
    id:number | null;
        
}
