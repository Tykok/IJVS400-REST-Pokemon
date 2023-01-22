import UserModel from 'db/models/user.model'
import User from 'types/user'

export const getUser = async (user: User): Promise<User> => {
  const userByPk = await UserModel.findByPk(user.id)
  return userByPk as unknown as User
}

export const addUser = async (user: User): Promise<User> => {
  const newUser = await UserModel.create({ ...user })
  return newUser as unknown as User
}

export const updateUser = async (user: User): Promise<[affectedNumber: number]> => {
  return await UserModel.update(user, { where: { id: user.id } })
}

export const deleteUser = async (user: User): Promise<number> => {
  return await UserModel.destroy({ where: { id: user.id } })
}
