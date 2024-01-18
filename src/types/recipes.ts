
export interface Recipes {
  results: Result[]
  offset: number
  number: number
  totalResults: number
}

export interface Result {
  id: number
  title: string
  image: string
  imageType: string
  isGuestFavorite: boolean
}

export interface Filters {
  cuisine: string,
  type: string,
  diet: string,
  query: string
}