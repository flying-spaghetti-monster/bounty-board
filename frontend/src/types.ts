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

export type PageDirection = "next" | "previous";

export enum Planets {
  Tatooine,
  Alderaan,
  Hoth,
  Dagobah,
  Bespin,
  Endor,
  Naboo,
  Coruscant,
  Kamino,
  Geonosis,
  Utapau,
  Mustafar,
  Kashyyyk,
}

export enum Status {
  open,
  accepted
}

export type Bounty = {
  id: string,
  title: string,
  description: string,
  target: string,
  planet: string,
  reward: number,
  status: string,
  creatorId: string,
  image: string,
  acceptedById: string | null
}