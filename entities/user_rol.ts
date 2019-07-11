import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {user} from "./user";
import {rol} from "./rol";


@Entity("user_rol",{schema:"movie" } )
@Index("fk_user_rol",["fkUser",])
@Index("fk_rol_user",["fkRol",])
export class user_rol {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(type=>user, user=>user.userRols,{  nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'fk_user'})
    fkUser:user | null;


   
    @ManyToOne(type=>rol, rol=>rol.userRols,{  nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'fk_rol'})
    fkRol:rol | null;

}
