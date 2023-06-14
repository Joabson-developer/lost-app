import { useEffect, useState } from "react"
import { ClashContext } from "./clash.context"

const initialClash: Clash[] = [
  {
    title: "Team Battle",
    description: "All Members can join",
    points: 5,
    length: "unlimited",
    time: "21:00",
    color: "purple",
    player: []
  },
  {
    title: "Vanguard Battle 1",
    description: "3 V 3",
    points: 2,
    length: 3,
    time: "21:07",
    color: "green",
    player: []
  },
  {
    title: "Vanguard Battle 2",
    description: "3 V 3",
    points: 2,
    length: 3,
    time: "21:07",
    color: "green",
    player: []
  },
  {
    title: "Vanguard Battle 3",
    description: "3 V 3",
    points: 2,
    length: 3,
    time: "21:07",
    color: "green",
    player: []
  },
  {
    title: "Vanguard Battle 4",
    description: "3 V 3",
    points: 2,
    length: 3,
    time: "21:07",
    color: "green",
    player: []
  },
  {
    title: "General Battle 1",
    description: "3 V 3",
    points: 4,
    length: 3,
    time: "21:20",
    color: "green",
    player: []
  },
  {
    title: "General Battle 2",
    description: "3 V 3",
    points: 4,
    length: 3,
    time: "21:20",
    color: "green",
    player: []
  },
  {
    title: "Team Battle",
    description: "All Members can join",
    points: 5,
    length: "unlimited",
    time: "21:33",
    color: "purple",
    player: []
  },
  {
    title: "Ace Battle 1",
    description: "1 V 1",
    points: 3,
    length: 1,
    time: "21:40",
    color: "red",
    player: []
  },
  {
    title: "Ace Battle 2",
    description: "1 V 1",
    points: 3,
    length: 1,
    time: "21:40",
    color: "red",
    player: []
  },
  {
    title: "Final Battle",
    description: "1 V 1",
    points: 7,
    length: 1,
    time: "21:53",
    color: "red",
    player: []
  }
]

export function ClashProvider({ children }: { children: JSX.Element }) {
  const [clash, setClash] = useState<Clash[]>(() => {
    try {
      const response = localStorage.getItem("clash")!
      return JSON.parse(response) || initialClash
    } catch {
      return initialClash
    }
  })

  useEffect(() => {
    localStorage.setItem("clash", JSON.stringify(clash))
  }, [clash])
  return (
    <ClashContext.Provider value={{ clash, setClash }}>
      {children}
    </ClashContext.Provider>
  )
}
