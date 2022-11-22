import { Entity, ObjectIdColumn, Column, OneToMany, ObjectID } from 'typeorm'
import { Transaction } from './index'

@Entity()
export class Account {
  @ObjectIdColumn()
  id: ObjectID

  @Column()
  balance: number

  @OneToMany(() => Transaction, (transaction) => transaction.creditAccountId)
  creditAccountId: Transaction[]

  @OneToMany(() => Transaction, (transaction) => transaction.debitedAccountId)
  debitedAccountId: Transaction[]
}
