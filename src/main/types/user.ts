interface User {
  id: number
  firstName: string
  lastName: string
  login: string
  password: string
  phone?: string
  mail?: string
  updatedAt?: string
  createdAt?: string
}

export default User
