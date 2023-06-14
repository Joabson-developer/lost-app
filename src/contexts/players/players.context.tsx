import { createContext } from "react"

export type PlayersType = {
  players: Player[]
  setPlayers: React.Dispatch<React.SetStateAction<Player[]>>
}

export const PlayersContext = createContext<PlayersType>(null!)
