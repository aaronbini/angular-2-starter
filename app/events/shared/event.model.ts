
export interface IEvent {
  name: string
  id: number
  date: Date
  time: string
  price: number
  imageUrl: string
  location?: ILocation
  onlineUrl?: string
  sessions: ISession[]
}

export interface ISession {
  id: number
  name: string
  presenter: string
  duration: number
  level: string
  abstract: string
  voters: string[]
}

export interface ILocation {
  address: string
  city: string
  country: string
}


