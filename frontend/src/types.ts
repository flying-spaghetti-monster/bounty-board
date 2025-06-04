enum Roles {
  ADMIN,
  USER
}

export type Login = {
  email: string
  password: string,
}

export type Registration = Login & {
  role: Roles
}