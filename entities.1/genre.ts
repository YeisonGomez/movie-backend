import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {movie} from "./movie";


@Entity("genre",{schema:"movie" } )
export class genre {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:false,
        name:"name"
        })
    name:string;
        

   
    @OneToMany(type=>movie, movie=>movie.fkGenre,{ onDelete: 'NO ACTION' ,onUpdate: 'NO ACTION' })
    movies:movie[];
    
}
