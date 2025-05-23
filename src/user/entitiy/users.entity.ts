import { USerRole } from 'src/common/enum/Role.enum';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity({ name: 'users' })
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name:string;

  @Column({nullable:true})
  email: string;

  nn
  @Column({nullable:true})
  password: string;

  @Column({nullable:true})
  major:string

  @CreateDateColumn({type:'timestamp'}) 
  createAt: Date;

  @Column({type:'enum',enum:USerRole,default:USerRole.Patient})
  role: string;


  @Column({nullable:true})
    shift:string;
  
  @Column({nullable:true})
  contact_info:string  

  @Column({ nullable: true })
  authStrategy: string;
}
