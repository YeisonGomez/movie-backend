import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {user_rol} from "./user_rol";


@Entity("rol",{schema:"movie" } )
export class rol {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:100,
        name:"name"
        })
    name:string;
        

   
    @OneToMany(type=>user_rol, user_rol=>user_rol.fkRol,{ onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    userRols:user_rol[];
    
}
