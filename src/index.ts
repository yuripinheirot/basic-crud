import { AppDataSource } from './data-source'
import { Account, User, Transaction } from './entity'

const newAccount = new Account()
newAccount.balance = 100.5

const newAccount2 = new Account()
newAccount.balance = 200.5

const newUser = new User()
newUser.username = 'test@test.com'
newUser.password = 'password'
newUser.accountId = newAccount

const newUser2 = new User()
newUser.username = 'test2@test.com'
newUser.password = 'password2'
newUser.accountId = newAccount2

const newTransaction = new Transaction()
newTransaction.createdAt = new Date()
newTransaction.creditAccountId = newAccount2
newTransaction.debitedAccountId = newAccount
newTransaction.value = 50

AppDataSource.initialize()
  .then(async () => {
    console.log('Database connected succesfully!')
    await AppDataSource.manager.save(newAccount)
    await AppDataSource.manager.save(newAccount2)
    await AppDataSource.manager.save(newUser)
    await AppDataSource.manager.save(newUser2)
    await AppDataSource.manager.save(newTransaction)

    console.log('Records saved succesfully!')
  })
  .catch((error) => console.log(error))
