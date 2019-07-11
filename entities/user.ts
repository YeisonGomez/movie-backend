import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {user_rol} from "./user_rol";


@Entity("user",{schema:"movie" } )
export class user {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:false,
        name:"email"
        })
    email:string;
        

    @Column("varchar",{ 
        nullable:false,
        name:"password"
        })
    password:string;
        

    @Column("varchar",{ 
        nullable:true,
        name:"names"
        })
    names:string | null;
        

   
    @OneToMany(type=>user_rol, user_rol=>user_rol.fkUser,{ onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    userRols:user_rol[];
    
}
