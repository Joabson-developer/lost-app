import { useEffect, useState } from "react"
import { PlayersContext } from "./players.context"

export function PlayersProvider({ children }: { children: JSX.Element }) {
  const [players, setPlayers] = useState<Player[]>(() => {
    try {
      const response = localStorage.getItem("players")!
      return JSON.parse(response) || []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem("players", JSON.stringify(players))
  }, [players])

  return (
    <PlayersContext.Provider value={{ players, setPlayers }}>
      {children}
    </PlayersContext.Provider>
  )
}
