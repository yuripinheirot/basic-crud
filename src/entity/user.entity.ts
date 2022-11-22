import { Entity, ObjectIdColumn, Column, OneToOne, JoinColumn, ObjectID } from 'typeorm'
import { Account } from './index'

@Entity()
export class User {
  @ObjectIdColumn()
  id: ObjectID

  @Column()
  username: string

  @Column()
  password: string

  @OneToOne(() => Account)
  @JoinColumn()
  accountId: ObjectID
}
