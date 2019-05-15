import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("specialisation",{schema:"mgerm_users" } )
@Index("record",["record",])
export class specialisation {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"spec"
        })
    spec:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
        default: () => "'0'",
        name:"spec_name"
        })
    spec_name:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"record"
        })
    record:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"spec_chapter"
        })
    spec_chapter:number | null;
        
}
