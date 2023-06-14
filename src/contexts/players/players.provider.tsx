import { useState } from "react"
import { PlayersContext } from "./players.context"

export function PlayersProvider({ children }: { children: JSX.Element }) {
  const [players, setPlayers] = useState<Player[]>([])

  return (
    <PlayersContext.Provider value={{ players, setPlayers }}>
      {children}
    </PlayersContext.Provider>
  )
}
