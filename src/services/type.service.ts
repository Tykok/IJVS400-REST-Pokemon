import TypeModel from '../db/models/type.model'
import Type from '../types/type'

export const getTypeById = async (typeId: number): Promise<Type> => {
  const type = await TypeModel.findByPk(typeId)
  return type as unknown as Type
}

export const getAllTypes = async (): Promise<Type[]> => {
  const allTypes = await TypeModel.findAll()
  return allTypes as unknown as Type[]
}

export const createType = async (type: Type): Promise<Type> => {
  const newType = await TypeModel.create(type)
  return newType as unknown as Type
}

export const updateType = async (typeId: number, type: Type): Promise<Type> => {
  const updatedType = await TypeModel.update(type, {
    where: {
      id: typeId
    }
  })
  return updatedType as unknown as Type
}
