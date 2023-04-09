import {Entity,BaseEntity,Column,PrimaryColumn} from "typeorm"

@Entity('client')
export class Client extends BaseEntity
{  @PrimaryColumn()
    id:number
@Column()
  First_name:String
  @Column()
  Last_name:String
  @Column ({
    unique:true
  })
  email:string
}