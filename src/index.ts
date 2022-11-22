import { AppDataSource } from './data-source'
import { Account, User, Transaction } from './entity'

const addDefaultValues = async () => {
  const newAccount = new Account()
  newAccount.balance = 100.5
  await AppDataSource.manager.save(newAccount)

  const newAccount2 = new Account()
  newAccount2.balance = 200.5
  await AppDataSource.manager.save(newAccount2)

  const newUser = new User()
  newUser.username = 'test@test.com'
  newUser.password = 'password'
  newUser.accountId = newAccount.id
  await AppDataSource.manager.save(newUser)

  const newUser2 = new User()
  newUser2.username = 'test2@test.com'
  newUser2.password = 'password2'
  newUser2.accountId = newAccount2.id
  await AppDataSource.manager.save(newUser2)

  const newTransaction = new Transaction()
  newTransaction.createdAt = new Date()
  newTransaction.creditAccountId = newAccount2.id
  newTransaction.debitedAccountId = newAccount.id
  newTransaction.value = 50
  await AppDataSource.manager.save(newTransaction)

  console.log('Records saved succesfully!')
}

AppDataSource.initialize()
  .then(async () => {
    console.log('Database connected succesfully!')
    await addDefaultValues()
  })
  .catch((error) => console.log(error))
