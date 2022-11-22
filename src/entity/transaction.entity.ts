import { Entity, ObjectIdColumn, Column, ManyToOne, ObjectID } from 'typeorm'
import { Account } from './index'

@Entity()
export class Transaction {
  @ObjectIdColumn()
  id: ObjectID

  @ManyToOne(() => Account, (account) => account.id)
  debitedAccountId: ObjectID

  @ManyToOne(() => Account, (account) => account.id)
  creditAccountId: ObjectID

  @Column()
  value: number

  @Column()
  createdAt: Date
}
